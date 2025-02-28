import React from 'react';

function InterviewComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl bg-secondary shadow-lg rounded-lg p-8">
        <img
          src="./images/cover.svg"
          alt="Vòng Tay Trầm Hương"
          className="w-full  object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">
          Vòng Tay Trầm Hương Mix Charm – Trân Quý Từ Bên Trong, Tinh Tế Từ Bên
          Ngoài
        </h1>
        <p className="text-black leading-relaxed mb-4">
          Vòng tay trầm hương không chỉ là một món trang sức, mà còn là biểu
          tượng của
          <strong> bình an, may mắn và đẳng cấp</strong>. Được kết hợp giữa
          <strong> trầm hương tự nhiên</strong> và{' '}
          <strong> charm cao cấp</strong>, mỗi sản phẩm mang đến sự thanh lịch
          và giá trị tâm linh sâu sắc.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-600 mt-6 mb-4">
          Vì sao vòng tay trầm hương charm được yêu thích?
        </h2>
        <ul className="list-disc list-inside text-black space-y-2">
          <li>
            <strong>Trầm hương thật 100%</strong> – Hương thơm dịu nhẹ, càng đeo
            càng lên mùi theo thời gian.
          </li>
          <li>
            <strong>Charm tinh xảo</strong> – Chế tác từ bạc 925, vàng 18K hoặc
            đá quý, mang lại may mắn và vượng khí.
          </li>
          <li>
            <strong>Hộp đựng sang trọng</strong> – Thiết kế đẳng cấp, thích hợp
            làm quà tặng ý nghĩa.
          </li>
          <li>
            <strong>Năng lượng tích cực</strong> – Giúp thư giãn, cân bằng tinh
            thần và thu hút tài lộc.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-600 mt-6 mb-4">
          Sự trân trọng đến từ từng chi tiết
        </h2>
        <p className="text-black leading-relaxed">
          Mỗi hạt trầm hương được chọn lọc kỹ lưỡng, từ vân gỗ đến mùi hương,
          đảm bảo chất lượng hoàn hảo. Charm được chế tác tinh tế, mang đậm
          phong cách cá nhân và ý nghĩa phong thủy. Không chỉ là một chiếc vòng
          tay, đây còn là{' '}
          <strong>
            món quà của sự trân trọng, một sự lựa chọn đầy tinh tế dành cho bạn
          </strong>
          .
        </p>

        <div className="bg-secondary p-4 rounded-md mt-6">
          <h2 className="text-xl font-semibold text-yellow-600 mb-2">
            Lời cảm ơn
          </h2>
          <p className="text-black">
            ✨{' '}
            <strong>
              Chân thành cảm ơn quý khách đã tin tưởng và lựa chọn sản phẩm của
              chúng tôi!
            </strong>{' '}
            ✨
          </p>
          <p className="text-black mt-2">
            Sự ủng hộ của quý khách là động lực để chúng tôi không ngừng mang
            đến những sản phẩm chất lượng và dịch vụ tốt nhất. Mong rằng vòng
            tay trầm hương charm sẽ luôn đồng hành và mang lại may mắn, bình an
            cho quý khách.
          </p>
          <p className="text-black mt-2">
            Nếu có bất kỳ thắc mắc hoặc cần hỗ trợ, đừng ngần ngại liên hệ với
            chúng tôi. Chúc quý khách nhiều sức khỏe và niềm vui!
          </p>
          <p className="text-black font-semibold mt-4">
            💖 Trân trọng, [Tên Thương Hiệu]
          </p>
        </div>
      </div>
    </div>
  );
}

export default InterviewComponent;
