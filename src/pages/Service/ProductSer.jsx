import React from 'react'
import Footer from '../../components/Footer/Footer'
import Slider from './Slider'
import VideoClipComponent from '../../components/Video/VideoClipComponent'
import Media from '../../components/Video/Media'

function ProductSer() {
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto relative pt-10'>
        <div className='relative text-center mb-10'>
            <div className='mb-5 text-center '>
                <h2 className=' font-oxa font-normal text-[40px] text-white capitalize'>Đơn Vị Hợp Tác</h2>
            </div>
            {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
            <section>
            <Slider/>
            </section>

            <div className='mt-10 mb-5 text-center '>
            <h2 className=' font-oxa font-normal text-[40px] text-white capitalize'>Video Clip</h2>
              <VideoClipComponent/>
       
            </div>

            <div className='mt-10 mb-5 text-center '>
            <h2 className=' font-oxa font-normal text-[40px] text-white capitalize'>Hình Ảnh Tư Liệu</h2>
              <Media/>
       
            </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ProductSer
