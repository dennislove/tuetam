import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductCard({
  id,
  tensp,
  giaban,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5
}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Giả lập tải dữ liệu
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    navigate(`/chi-tiet-san-pham/${id}`, {
      state: { id, tensp, giaban, image_1, image_2, image_3, image_4, image_5 }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className="relative group bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        loading="lazy"
        src={image_1}
        alt="Sản phẩm"
        className="w-full bg-cover object-cover group-hover:scale-110 transform duration-200"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold font-rob">{tensp}</h2>
        <p className="text-lg font-bold text-red-500">
          {Number(giaban).toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
          })}
        </p>
        <div className="mt-4 space-y-2">
          <div
            onClick={handleClick}
            className="w-full cursor-pointer hover:border flex items-center justify-center gap-2 border-[#84472d] border py-2 rounded text-gray-700 hover:bg-gray-200"
          >
            ℹ️ Xem Chi Tiết
          </div>
        </div>
      </div>
    </div>
  );
}

// Skeleton Card
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 animate-pulse">
    <Skeleton height={180} />
    <div className="p-4">
      <Skeleton height={20} width={`80%`} />
      <Skeleton height={20} width={`50%`} />
      <Skeleton height={40} width={`100%`} />
    </div>
  </div>
);
