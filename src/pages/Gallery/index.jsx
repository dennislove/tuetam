import { motion } from 'framer-motion';
import { useState } from 'react';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const images = [
  './images/products/4la_kim_nam.png',
  './images/products/4la_moc_tuitien.png',
  './images/products/4la_moc.png',
  './images/products/108 hat 8 li.png',
  './images/products/hoasen_moc.png',
  './images/products/moc_trungnien.png',
  './images/products/ngudieu_kim.png',
  './images/products/ngudieu_moc.png',
  './images/products/ngudieu_thuy.png',
  './images/products/product_1.png'
];
export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState(
    new Array(images.length).fill(false)
  );

  // Xử lý khi ảnh tải xong
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };
  return (
    <div className="min-h-screen max-w-7xl mx-auto  p-6 flex flex-col items-center">
      <h2 className=" font-oxa font-semibold text-[50px] text-primary capitalize">
        Bộ Sưu tập
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {images.map((src, index) => (
          <div key={index} className="relative w-full">
            {/* Skeleton hiển thị khi ảnh chưa tải xong */}
            {!loadedImages[index] && <SkeletonGallery />}

            <motion.img
              src={src}
              alt={`Gallery ${index}`}
              loading="lazy"
              className={`rounded-3xl shadow-lg hover:opacity-80 w-full h-full object-cover ${
                loadedImages[index] ? 'block' : 'hidden'
              }`}
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
