import React from 'react'
import {Link} from 'react-router-dom'
import reviewimg from '../../images/reviewimg.png'

function InterviewComponent() {
  return (
    <div className='max-w-[1300px] lg:m-auto md:mx-10 sm:mx-16 relative pb-20'>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
            <img loading='lazy' src={reviewimg} alt="" />
            <div className=' text-start flex flex-col gap-6 justify-center'>
                <h1 className='text-yellow-600 font-bold text-3xl'>Trầm Hương Tuệ Tâm - Điểm đến tin cậy cho những tín đồ yêu mến trầm hương.</h1>
                <p className='text-white leading-loose ' ><Link to='/' className='font-oxa text-yellow-600 underline'>Trầm Hương Tuệ Tâm</Link> là nền tảng trực tuyến hàng đầu, chuyên cung cấp các thông tin và quảng bá các địa chỉ mua bán trầm hương uy tín trên toàn quốc. Chúng tôi tự hào là cầu nối vững chắc giữa những người yêu thích và tìm kiếm sản phẩm trầm hương chất lượng cao với những nhà cung cấp đáng tin cậy.</p>
            </div>
        </div>

        <div className='mt-20'>
            <h2 className='text-yellow-600 text-2xl'>Vì sao chọn dịch vụ Trầm Hương Tuệ Tâm?</h2>

           <div className='grid grid-cols-1 gap-7 mt-5'>
                <p className='text-white'><strong className=' italic'>Uy tín và Chất lượng:</strong> Mỗi đối tác cung cấp trầm hương được chúng tôi kỹ lưỡng lựa chọn dựa trên những tiêu chuẩn khắt khe về chất lượng sản phẩm và độ tin cậy của doanh nghiệp.</p>
                <p className='text-white'><strong className=' italic'>Đa dạng sản phẩm:</strong> Tại Trầm Hương Tuệ Tâm, bạn có thể tìm thấy một loạt các sản phẩm trầm hương từ nhang trầm, tinh dầu trầm, đến các tác phẩm điêu khắc trầm hương tinh xảo từ các đối tác chất lượng và uy tín. Dù bạn là người mới bắt đầu hay một nhà sưu tập lâu năm, chúng tôi có đủ mọi thứ bạn cần.</p>
                <p className='text-white'><strong className=' italic'>Thông tin đầy đủ và minh bạch:</strong> Chúng tôi cung cấp thông tin chi tiết về nguồn gốc, quy trình chế tác và những lợi ích thiết thực của từng sản phẩm trầm hương, giúp bạn đưa ra quyết định mua hàng một cách thông thái.</p>
                <p className='text-white'>Không chỉ là một trang web quảng cáo, Trầm Hương Tuệ Tâm còn là nơi quy tụ của cộng đồng những người yêu trầm hương. Chúng tôi tổ chức các sự kiện, hội thảo và chia sẻ kiến thức nhằm tạo dựng một môi trường học hỏi và chia sẻ kinh nghiệm giữa những người đam mê trầm hương.</p>
            
           </div>
        </div>
    </div>
  )
}

export default InterviewComponent
