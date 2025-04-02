import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../../App';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const folderRef = ref(storage, 'gallery'); //
      try {
        const result = await listAll(folderRef);
        const urls = await Promise.all(
          result.items.map(async (item) => getDownloadURL(item))
        );
        setImages(urls);
        setLoadedImages(new Array(urls.length).fill(false));
      } catch (error) {
        console.error('Lỗi khi lấy ảnh:', error);
      }
    };

    fetchImages();
  }, []);
  console.log(images);

  // Xử lý khi ảnh tải xong
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6 flex flex-col items-center">
      <h2 className="font-oxa font-semibold text-[50px] text-primary capitalize">
        Bộ Sưu tập
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {images.map((url, index) => (
          <div key={index} className="relative w-full">
            {/* Skeleton hiển thị khi ảnh chưa tải xong */}
            {!loadedImages[index] && <SkeletonGallery />}
            <motion.img
              src={url}
              alt={`Gallery ${index}`}
              loading="lazy"
              className="rounded-3xl shadow-lg hover:opacity-80 w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              onLoad={() => handleImageLoad(index)} // Ẩn Skeleton khi ảnh tải xong
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const SkeletonGallery = () => (
  <Skeleton
    height={'100%'}
    width={'100%'}
    borderRadius={'1.5rem'}
    className="shadow-lg"
  />
);
