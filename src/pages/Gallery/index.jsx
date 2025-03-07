import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  './images/banner_1.avif',
  './images/banner_2.avif',
  './images/banner_3.avif',
  './images/banner_4.avif'
];
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col items-center">
      <h2 className=" font-oxa font-semibold text-[50px] text-primary capitalize">
        Bộ Sưu tập
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="rounded-lg shadow-lg cursor-pointer hover:opacity-80"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        </div>
      )}
    </div>
  );
}
