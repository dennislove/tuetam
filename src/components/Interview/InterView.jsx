import React, { useState } from 'react'
import data from '../../assets/data.json'
import RightBarIV from './RightBarIV';
import Button from '../Button/Button';

function InterView({ customers }) {
  // const customers = data.customer

  const [liked, setLiked] = useState(new Array(customers.length).fill(true));

  const handleLike = (index) => {
    // Tạo một bản sao của mảng hiện tại
    const updatedLikes = [...liked];
    // Đảo trạng thái liked cho item được click
    updatedLikes[index] = !updatedLikes[index];
    // Cập nhật state
    setLiked(updatedLikes);
};
const [itemsToShow, setItemsToShow] = useState(4); // Số phần tử ban đầu hiển thị là 4
const [expanded, setExpanded] = useState(false); // Trạng thái của list, ban đầu là không mở rộng

const showMore = () => {
  setItemsToShow(customers.length); // Hiển thị toàn bộ phần tử
  setExpanded(true); // Đặt trạng thái mở rộng là true
};

const showLess = () => {
  setItemsToShow(4); // Trở về hiển thị chỉ 4 phần tử
  setExpanded(false); // Đặt trạng thái mở rộng là false
};

  return (
    
    <div className='grid md:grid-cols-3 pm:grid-cols-1 md:gap-5 w-full'>
       <div className=' col-span-2 bg-white px-4 border-b pb-4'>
        <h4 className='mt-5 mb-3 font-bold text-xl text-start ml-4'>Việc Làm Tuyển Gấp</h4>
      
          {customers.slice(0, itemsToShow).map(customer => (
            <div className="w-full rounded flex overflow-hidden shadow-lg border border-gray-200  p-4 my-4 " key={customer.id}>
              <img className="w-[100px] h-full my-auto" src={customer.imgSrc} alt={customer.imgAlt}/>
              <div className="px-6 py-4 text-start grow">
                <h4 className='font-bold text-xl mb-2'>{customer.jobs}</h4>
                <h4 className=" text-gray-500">{customer.company}</h4>
                <p className="text-gray-500 text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                  {customer.location}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2"  onClick={() => handleLike(customer.id)}>
              {liked[customer.id] ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                  ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-600">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                  )
                }

              </div>
              
            </div>
          ))}
       
            <Button onClick={expanded ? showLess : showMore} name={expanded ? 'Ẩn bớt' : 'Xem thêm'}/>
       </div>
      <div className=' col-span-1 bg-white '> 
        <div className='flex md:flex-col pm:flex-row pm:justify-between pm:px-5 pm:pb-5'>
          <RightBarIV/>
          
          <div className='mt-4 py-5 px-3 bg-gray-200 rounded-lg text-black'>
                  <div className='flex gap-2 mt-3'>
                      <h4 className=' underline'>Giải pháp doanh nghiệp</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  </div>
                  <div className='flex gap-2 mt-3'>
                      <h4 className=' underline'>Diễn đàn cộng đồng</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  </div>
                  <div className='flex gap-2 mt-3'>
                      <h4 className=' underline'>Hợp đồng trực tiếp</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  </div>
                  <div className='flex gap-2 mt-3'>
                      <h4 className=' underline'>Trung tâm trợ giúp</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  </div>
         </div>
        </div>
      </div>

       
       </div>

  )
}

export default InterView
