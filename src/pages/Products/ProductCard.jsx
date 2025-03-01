/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { useNavigate } from 'react-router-dom';
export default function ProductCard({ ...product }) {
  const discount = 10;
  const discountedPrice =
    product.giahientai - (product.giahientai * discount) / 100;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/chi-tiet-san-pham/${product.id}`, {
      state: { product }
    });
  };

  return (
    <div className="">
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Thẻ giảm giá góc ảnh */}
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Giảm {discount}%
        </span>

        {/* Hình ảnh sản phẩm */}
        <img
          src="./images/logo.png"
          alt="Sản phẩm"
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          {/* Tên và giá sản phẩm */}
          <h2 className="text-xl font-semibold font-pop">{product.tensp}</h2>
          {/* <p className="text-lg font-bold text-red-500">
            {discountedPrice.toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND'
            })}
          </p> */}
          {/* <p className="text-sm text-gray-500 line-through">
            {product.giahientai.toLocaleString()}
          </p> */}

          {/* Nút hành động */}
          <div className="mt-4 space-y-2">
            <div
              onClick={handleClick}
              className="w-full flex items-center justify-center gap-2 border py-2 rounded text-gray-700 hover:bg-gray-200"
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
