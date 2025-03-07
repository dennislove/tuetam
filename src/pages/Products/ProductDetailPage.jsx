import { useLocation } from 'react-router-dom';

export default function ProductDetailPage() {
  const location = useLocation();
  const { id, tensp, giaban, image_1, image_2 } = location.state || {};

  if (!id) {
    return <p className="text-center text-red-500">Sản phẩm không tồn tại!</p>;
  }

  return (
    <>
      <div className="container max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg">
        {/* Hình ảnh sản phẩm */}
        <div className="flex flex-col items-center">
          <img
            src={image_1}
            alt="Sản phẩm"
            className="w-2/3 object-cover"
            loading="lazy"
          />
          <div className=" mt-4 flex gap-2">
            <img
              src={image_2}
              alt="Sản phẩm"
              className="w-[30%] object-cover"
              loading="lazy"
            />
            <img
              src={image_2}
              alt="Sản phẩm"
              className="w-[30%] object-cover"
              loading="lazy"
            />
            <img
              src={image_2}
              alt="Sản phẩm"
              className="w-[30%] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Chi tiết sản phẩm */}
        <div>
          <h1 className="text-2xl font-semibold font-rob">{tensp}</h1>

          {/* Giá sản phẩm */}
          <div className="mt-4">
            <span className="text-red-500 text-2xl font-bold">
              {Number(giaban).toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND'
              })}
            </span>
          </div>

          {/* Thông tin vận chuyển */}
          <div className="mt-4 text-gray-600">
            🚚 Nhận từ 3-5 ngày & Trả hàng miễn phí trong vòng 7 ngày
          </div>

          {/* Mô tả sản phẩm dài hơn */}
          <div className="mt-4 text-gray-700 font-rob">
            <h2 className="text-lg font-semibold">Mô tả sản phẩm</h2>
            <p className="mt-2">
              Vòng tay trầm hương không chỉ là một món trang sức mà còn là vật
              phẩm phong thủy mang ý nghĩa đặc biệt. Được chế tác từ gỗ trầm
              hương tự nhiên, sản phẩm này không chỉ giúp bạn
              <strong> thư giãn, giảm căng thẳng </strong>
              mà còn mang đến sự
              <strong> bình an, may mắn và tài lộc </strong>
              cho người đeo.
            </p>
            <p className="mt-2">
              Kết hợp với charm phong thủy ngũ điếu, vòng tay giúp tăng thêm
              <strong> vượng khí </strong>
              cho người sở hữu, đồng thời mang lại
              <strong> năng lượng tích cực, xua đuổi tà khí</strong>. Mỗi hạt
              trầm hương tỏa ra hương thơm dịu nhẹ, giúp tinh thần sảng khoái và
              thư thái hơn sau những giờ làm việc căng thẳng.
            </p>
            <h3 className="mt-4 text-lg font-semibold">Thông tin chi tiết:</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>
                <strong>Chất liệu:</strong> Trầm hương tự nhiên 100%, charm đá
                phong thủy
              </li>
              <li>
                <strong>Hương thơm:</strong> Nhẹ nhàng, dễ chịu, giúp thư giãn
                tinh thần
              </li>
              <li>
                <strong>Công dụng:</strong> Giảm căng thẳng, thu hút tài lộc,
                hợp phong thủy
              </li>
              <li>
                <strong>Kích thước:</strong> Hạt trầm hương từ 6mm - 12mm (tùy
                mẫu)
              </li>
              <li>
                <strong>Bảo quản:</strong> Tránh tiếp xúc với nước, hóa chất,
                cất hộp khi không dùng
              </li>
              <li>
                <strong>Hỗ trợ:</strong> Thay dây miễn phí
              </li>
            </ul>
          </div>

          {/* Nút tùy chỉnh */}
          <div className="mt-6">
            <a
              href="https://www.facebook.com/tuetamstore92"
              target="_blank"
              rel="noopener noreferrer"
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
