import React, { useState, useEffect } from 'react';
import { GiUpgrade } from 'react-icons/gi';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Improved visibility logic considering different scroll positions
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-10 w-14 h-14 right-10 px-4 py-2 rounded-full bg-yellow-600 hover:bg-yellow-400 text-white focus:outline-none ${
        !isVisible && 'hidden'
      }`}
      onClick={handleClick}
    >
      <GiUpgrade size={22} />
    </button>
  );
};

export default ScrollToTop;
