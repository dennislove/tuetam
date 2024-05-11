import React, { useState } from 'react'
import Button from '../Button/Button'

function ReviewJop({ onSearchSubmit   }) {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [localSelectedLocation, setLocalSelectedLocation] = useState('');
  const handleSubmit = () => {
      onSearchSubmit(localSearchTerm, localSelectedLocation);
  };
  const clearInput = () => {
    setLocalSearchTerm('');
};
  return (
      <div className="grid items-center md:grid-cols-4 md:gap-4 pm:gap-y-4">
        <div className="relative w-full">
          <input
          onChange={(e) => setLocalSearchTerm(e.target.value)}
            type="text"
            value={localSearchTerm}
            placeholder="Tìm kiếm vị trí..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className='absolute right-3 top-3'>
            {localSearchTerm ? (
              <svg onClick={clearInput} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-500">
              <path fillRule="evenodd" d="M8.707 10l-3.147 3.146a.5.5 0 0 0 .708.708L10 10.707l3.146 3.147a.5.5 0 0 0 .708-.708L10.707 10l3.147-3.146a.5.5 0 0 0-.708-.708L10 9.293 6.854 6.146a.5.5 0 0 0-.708.708L9.293 10z" clipRule="evenodd" />
          </svg>
            ) :(
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              )}
          </div>
        </div>
        {/* <div className="relative w-full">
          <select 
           className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>--- Chọn vị trí ---</option>
            <option value="Marketing">Nhân viên Marketing</option>
            <option value="điều chế">Nhân viên điều chế</option>
            <option value="sản xuất">Nhân viên sản xuất</option>
            <option value="đóng gói">Nhân viên đóng gói</option>
            <option value="bán hàng">Nhân viên bán hàng</option>
          </select>
        </div> */}
        <div className="relative w-full">
          <select
          onChange={(e) => setLocalSelectedLocation(e.target.value)}
          defaultValue=""
           className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
           <option value="">--- Địa điểm ---</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Quảng Nam">Quảng Nam</option>
                <option value="Nha Trang">Nha Trang</option>
                <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
          </select>
        </div>
        <div className='relative w-full'>
          <Button onClick={handleSubmit} name="Tìm kiếm" />
        </div>
      </div>

  )
}

export default ReviewJop
