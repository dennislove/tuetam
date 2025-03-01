import React from 'react';

function ButtonOutLine({ name, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className=" cursor-default lg:px-8 md:px-6  lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-primary font-semibold text-primary rounded-lg transition-all 
    duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-primary hover:text-white
    before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear"
    >
      {name}
    </button>
  );
}

export default ButtonOutLine;
