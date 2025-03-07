import { useState, useEffect, useRef } from 'react';
// const images = [
//   'https://firebasestorage.googleapis.com/v0/b/tuetam-tuetam.appspot.com/o/images%2Fbanner_1.avif?alt=media&token=e2f80438-524b-4778-87ac-ff7692d6c4c5',
//   'https://firebasestorage.googleapis.com/v0/b/tuetam-tuetam.appspot.com/o/images%2Fbanner_2.avif?alt=media&token=fed26b96-5760-457d-aff5-cf82e834405d',
//   'https://firebasestorage.googleapis.com/v0/b/tuetam-tuetam.appspot.com/o/images%2Fbanner_3.avif?alt=media&token=846d7c59-2d39-4d19-989f-ba5e9996f955',
//   'https://firebasestorage.googleapis.com/v0/b/tuetam-tuetam.appspot.com/o/images%2Fbanner_4.avif?alt=media&token=ee7cce33-dccc-4bac-aff4-d80fe53a43e7'
// ];
const images = [
  './images/banner_1.avif',
  './images/banner_2.avif',
  './images/banner_3.avif',
  './images/banner_4.avif'
];

export default function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(1);
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(images.length - 1);
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-[90%] mx-auto overflow-hidden relative  rounded-lg shadow-lg">
      <div
        ref={sliderRef}
        className={`flex ${
          isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <img
          src={images[images.length - 1]}
          loading="lazy"
          alt="Clone Last"
          className="w-full flex-shrink-0 object-cover"
        />
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
        <img
          src={images[0]}
          alt="Clone First"
          className="w-full flex-shrink-0 object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}
