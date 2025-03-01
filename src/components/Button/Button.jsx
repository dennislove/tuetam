import React from 'react';

function Button({ name, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className=" cursor-pointer relative lg:px-8 md:px-6 lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-primary font-semibold text-white rounded-lg transition-all bg-primary
    duration-1000 ease-in-out inline-block overflow-hidden capitalize shadow-md hover:bg-transparent hover:text-primary
    before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear"
    >
      {name}
    </button>
  );
}

export default Button;
