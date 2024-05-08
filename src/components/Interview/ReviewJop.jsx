import React from 'react'
import Button from '../Button/Button'

function ReviewJop() {
  return (
      <div className="grid items-center md:grid-cols-4 md:gap-4 pm:gap-y-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Tìm kiếm vị trí..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className='absolute right-3 top-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>
        <div className="relative w-full">
          <select className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>--- Chọn vị trí ---</option>
            <option>Nhân viên Marketing</option>
            <option>Nhân viên điều chế</option>
            <option>Nhân viên sản xuất</option>
            <option>Nhân viên đóng gói</option>
            <option>Nhân viên bán hàng</option>
          </select>
        </div>
        <div className="relative w-full">
          <select className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option >--- Địa điểm ---</option>
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>Quảng Nam</option>
            <option>Nha Trang</option>
            <option>TP. Hồ Chí Minh</option>
          </select>
        </div>
        <div className='relative w-full'>
          <Button name="Tìm kiếm" />
        </div>
      </div>

  )
}

export default ReviewJop
