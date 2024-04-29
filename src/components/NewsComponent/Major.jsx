import React from 'react'
import data from '../../assets/data.json'
import { Link } from 'react-router-dom'

function Major() {

    const major = data.major
    
  return (
    <div className='grid md:grid-cols-3 pm:grid-cols-1 sm:grid-cols-2 gap-2 '>
       {major.map((item, index) =>(

        <div key={index} className='bg-white p-4 hover:-translate-y-1 transform ease-linear duration-150 hover:shadow-[0px_4px_0px_3px_rgba(183,183,183,0.6)]'>
            <h2 className='text-yellow-600 text-xl font-semibold'>{item.title}</h2>
            <p className='mt-3 text-16'>{item.description}</p>

            <Link to={item.path}  className="mt-3 lg:px-10 md:px-8 lg:py-3 md:py-2 pm:px-8 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                  duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                  before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
              before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
              Xem thêm
              </Link>
        </div>
       ))}
    </div>
  )
}

export default Major
