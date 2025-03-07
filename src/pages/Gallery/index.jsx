import { useState } from 'react';
import { motion } from 'framer-motion';

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
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen max-w-7xl mx-auto  p-6 flex flex-col items-center">
      <h2 className=" font-oxa font-semibold text-[50px] text-primary capitalize">
        Bộ Sưu tập
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            loading="lazy"
            className="rounded-3xl shadow-lg cursor-pointer hover:opacity-80"
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
