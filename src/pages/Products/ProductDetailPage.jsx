import Footer from '../../components/Footer/Footer';

export default function ProductDetailPage() {
  const product = {
    name: 'Combo 10 đôi Tất Nam Nữ, Vớ FILA Chống Hôi Chân Cổ Ngắn Kháng Khuẩn',
    rating: 4.8,
    reviews: 4700,
    sold: 22900,
    originalPrice: 110000,
    discountPrice: 61000,
    discountPercent: 51,
    minPrice: 29400,
    maxPrice: 61000,
    shippingDate: '2 Th03 - 4 Th03',
    freeReturn: true,
    colors: ['màu đen', 'màu xám', 'màu lông chuột', 'màu trắng'],
    quantities: ['combo 5 đôi', 'combo 10 đôi'],
    images: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300'
    ]
  };

  return (
    <>
      <div className="container mx-auto p-4 grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg">
        {/* Hình ảnh sản phẩm */}
        <div className="flex flex-col items-center">
          <img
            src={product.images[0]}
            alt="Sản phẩm"
            className="w-full h-80 object-cover"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Sản phẩm"
                className="w-16 h-16 object-cover border rounded"
              />
            ))}
          </div>
        </div>

        {/* Chi tiết sản phẩm */}
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="flex items-center text-yellow-500 text-lg mt-2">
            ⭐ {product.rating} ({product.reviews.toLocaleString()} đánh giá) |{' '}
            {product.sold.toLocaleString()} đã bán
          </div>

          {/* Giá sản phẩm */}
          <div className="mt-4">
            <span className="text-red-500 text-2xl font-bold">
              đ{product.minPrice.toLocaleString()} - đ
              {product.maxPrice.toLocaleString()}
            </span>
            <span className="text-gray-500 line-through ml-2">
              đ{product.originalPrice.toLocaleString()}
            </span>
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded ml-2">
              -{product.discountPercent}%
            </span>
          </div>

          {/* Thông tin vận chuyển */}
          <div className="mt-4 text-gray-600">
            🚚 Nhận từ {product.shippingDate} |{' '}
            {product.freeReturn && 'Trả hàng miễn phí 15 ngày'}
          </div>

          {/* Chọn màu sắc */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Màu sắc:</h2>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="border px-4 py-2 rounded hover:bg-gray-200"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Chọn số lượng */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Số lượng:</h2>
            <div className="flex gap-2 mt-2">
              {product.quantities.map((qty, index) => (
                <button
                  key={index}
                  className="border px-4 py-2 rounded hover:bg-gray-200"
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>

          {/* Nút mua hàng */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-red-500 text-white py-3 rounded-lg text-lg hover:bg-red-600">
              Mua ngay
            </button>
            <button className="flex-1 border py-3 rounded-lg text-lg hover:bg-gray-100">
              Thêm vào giỏ
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
