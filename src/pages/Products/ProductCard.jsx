/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useNavigate } from 'react-router-dom';
export default function ProductCard({ id, tensp, giaban, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chi-tiet-san-pham/${id}`, {
      state: { id, tensp, giaban, image }
    });
  };

  return (
    <div className="" onClick={handleClick}>
      <div className="relative group bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Thẻ giảm giá góc ảnh */}
        {/* <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Giảm {discount}%
        </span> */}

        {/* Hình ảnh sản phẩm */}
        <img
          src="./images/products/product_1.png"
          alt="Sản phẩm"
          className="w-full bg-cover  object-cover group-hover:scale-110 transform duration-200"
        />
        <div className="p-4">
          {/* Tên và giá sản phẩm */}
          <h2 className="text-xl font-semibold font-rob">{tensp}</h2>
          <p className="text-lg font-bold text-red-500">
            {giaban.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND'
            })}
          </p>

          {/* Nút hành động */}
          <div className="mt-4 space-y-2">
            <div
              onClick={handleClick}
              className="w-full cursor-pointer hover:border flex items-center justify-center gap-2 border py-2 rounded text-gray-700 hover:bg-gray-200"
            >
              ℹ️ Xem Chi Tiết
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                target="blank"
                href="https://www.facebook.com/tuetamstore92"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                🛒 Đặt Hàng
              </a>
              <a
                href="tel:0934919820"
                className="w-full flex items-center justify-center gap-2 bg-gray-300 py-2 rounded hover:bg-gray-400"
              >
                📞 Tư Vấn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
