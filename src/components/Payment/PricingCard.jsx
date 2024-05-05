import React from 'react';

const PricingCard = ({option, description, price,buttonLabel,features}) => {
  return (
    <div class=" hover:border-yellow-600 hover:-translate-y-2 transform duration-300 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">{option}</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{description}</p>
                    <div class="flex justify-center items-baseline my-8">
                        <span class="mr-2 text-5xl font-extrabold">{price}</span>
                        <span class="text-gray-500 dark:text-gray-400">/tháng</span>
                    </div>
                    
                    <ul role="list" class="mb-8 space-y-4 text-left">
                    {features.map(item=>(

                        <li class="flex items-center space-x-3">
                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>{item.title} <span class="font-semibold">{item.hot}</span></span>
                        </li>
                    ))}
                        
                    </ul>
                    <button className=" lg:px-8 md:px-6  lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                      duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                      before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
                  before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
                  {buttonLabel}
                  </button>
                </div>
  );
};

export default PricingCard;
