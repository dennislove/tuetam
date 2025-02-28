import ProductCard from './ProductCard';
import data from '../../assets/data.json';
import React from 'react';
export default function Products() {
  const products = data.products;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-oxa text-center mb-6">Danh Sách Sản Phẩm</h1>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            id={product.STT}
            key={product.STT}
            masp={product.MaSanPham}
            tensp={product.TenSanPham}
            sl={product.SoLuong}
            giahientai={product.GiaBanHienTai}
          />
        ))}
      </div>
    </div>
  );
}
