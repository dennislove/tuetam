import { useLocation } from 'react-router-dom';
export default function ProductDetailPage() {
  const location = useLocation();
  const product = location.state; // Nhận dữ liệu từ ProductCard

  if (!product) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại!</p>;
  }
  const discount = 10;
  const discountedPrice =
    product.giahientai - (product.giahientai * discount) / 100;
  return (
    <>
      <div className="container mx-auto p-4 grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg">
        {/* Hình ảnh sản phẩm */}
        <div className="flex flex-col items-center">
          {/* <img
            src={product.images[0]}
            alt="Sản phẩm"
            className="w-full h-80 object-cover"
          /> */}
          {/* <div className="flex gap-2 mt-4">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Sản phẩm"
                className="w-16 h-16 object-cover border rounded"
              />
            ))}
          </div> */}
        </div>

        {/* Chi tiết sản phẩm */}
        <div>
          <h1 className="text-2xl font-semibold">{product.tensp}</h1>

          {/* Giá sản phẩm */}
          <div className="mt-4">
            <span className="text-red-500 text-2xl font-bold">
              đ{discountedPrice.toLocaleString()}
            </span>
            <span className="text-gray-500 line-through ml-2">
              {product.giahientai.toLocaleString()} VNĐ
            </span>
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded ml-2">
              -{discount}%
            </span>
          </div>

          {/* Thông tin vận chuyển */}
          <div className="mt-4 text-gray-600">
            🚚 Nhận từ 3-5 ngày & Trả hàng miễn phí trong vòng 7 ngày
          </div>

          <div className="mt-6 ">
            <a
              href="https://www.facebook.com/tuetamstore92"
              target="blank"
              className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg text-lg hover:bg-red-600"
            >
              Tùy chỉnh
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
