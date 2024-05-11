import React, { useState } from 'react'
import data from '../../assets/data.json'

function RightBarIV() {
    const customers = data.job

   
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
    <div className=' md:px-4 '>
        <h4 className='mt-5 mb-3 font-bold text-xl text-start ml-4'>Ngành Nghề</h4>
              {customers.slice(0, itemsToShow).map((customer, index) => (
                <div key={index} className='bg-white md:px-4 py-2 flex justify-between sm:items-center'>
                  <span className='text-gray-800 font-medium'>{customer.jobs}</span>
                  <span className='text-gray-400'>({customer.quantity})</span>
                </div>
              ))}
            <button onClick={expanded ? showLess : showMore} className='mt-4 text-blue-500 underline py-2 px-4 rounded'>
            {expanded ? 'Ẩn bớt' : `Xem thêm `}
            </button>
           
          </div>
  )
}

export default RightBarIV
