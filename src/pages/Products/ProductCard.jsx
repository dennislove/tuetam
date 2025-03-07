/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useNavigate } from 'react-router-dom';
export default function ProductCard({ id, tensp, giaban, image_1, image_2 }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chi-tiet-san-pham/${id}`, {
      state: { id, tensp, giaban, image_1, image_2 }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="">
      <div className="relative group bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Thẻ giảm giá góc ảnh */}
        {/* <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Giảm {discount}%
        </span> */}

        {/* Hình ảnh sản phẩm */}
        <img
          loading="lazy"
          src={image_1}
          alt="Sản phẩm"
          className="w-full bg-cover  object-cover group-hover:scale-110 transform duration-200"
        />
        <div className="p-4">
          {/* Tên và giá sản phẩm */}
          <h2 className="text-xl font-semibold font-rob">{tensp}</h2>
          <p className="text-lg font-bold text-red-500">
            {Number(giaban).toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND'
            })}
          </p>

          {/* Nút hành động */}
          <div className="mt-4 space-y-2">
            <div
              onClick={handleClick}
              className="w-full cursor-pointer hover:border flex items-center justify-center gap-2 border-[#84472d] border py-2 rounded text-gray-700 hover:bg-gray-200"
            >
              ℹ️ Xem Chi Tiết
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
