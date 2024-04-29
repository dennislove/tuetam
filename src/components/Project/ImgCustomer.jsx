import React from 'react'
import data from '../../assets/data.json'
import { Link } from 'react-router-dom'
function ImgCustomer() {
    const customers = data.customer
  return (
    <div className='grid  mt-6 px-5 justify-center items-center
    lg:grid-cols-5 lg:gap-y-10 
    md:gap-y-8 
     sm:grid-cols-3 sm:gap-x-3 sm:gap-y-6 
     pm:grid-cols-2 pm:gap-y-5 pm:gap-x-2'>
      {customers.map(customer => (
        <Link to={customer.path} key={customer.id} target='_blank'>
          <img src={customer.imgSrc} loading='lazy' alt={customer.imgAlt} className='text-white w-3/4 bg-cover hover:scale-125 transition ease-out duration-300'/>
        </Link>
      ))}
    </div>
  )
}

export default ImgCustomer
