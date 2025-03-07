import ProductCard from './ProductCard';
import data from '../../assets/data.json';
import React from 'react';
import AutoSlider from '../../components/AutoSlider';
export default function Products() {
  const products = data.products;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <AutoSlider />
      <h2 className=" text-center font-oxa font-semibold mt-14 mb-4 text-[50px] text-primary capitalize">
        Danh Sách Sản Phẩm
      </h2>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            tensp={product.TenSanPham}
            giaban={product.GiaBanHienTai}
            image={product.LinkHinhAnh}
            id={product.STT}
          />
        ))}
      </div>
    </div>
  );
}
