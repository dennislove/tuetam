import React from 'react'
import PhotoCollage from './PhotoCollage'
import { Link } from 'react-router-dom'

function Interview() {
    
  return (
   <div className=' py-[80px] bg-[#000022] lg:px-0  sm:px-5 '>
        <div className=' max-w-[1300px] m-auto relative '>
           <div className='  justify-between md:flex  pm:block'>
               <div className=" bg-[url(images/bg1.jpg)]  md:w-[35%]  pm:w-full bg-cover p-[50px]">
                    <div className='block text-white'>
                        <h2 className='font-semibold text-3xl text-center mb-5'>DỊCH VỤ TRẦM HƯƠNG <span className='text-yellow-600'>TUỆ TÂM</span></h2>
                        <span className=' font-light leading-6 text-base '>"Tuệ Tâm" lấy biểu tượng hình ảnh vị Phật ngồi thiền ở trung tâm, được bao quanh bởi nhiều biểu tượng tĩnh lặng và thiên nhiên. Hình vòng cung tượng trưng cho sự liên kết trí tuệ. Hai bàn tay phía dưới tượng trưng cho sự nâng đỡ và bảo vệ.</span>
                        <div className='mt-4'>
                            <Link to='/san-pham' className="px-8 py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                                duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                                before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
                            before:bg-gradient-to-r before:from-transparent  before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
                            Xem thêm
                            </Link>
                    </div>
                </div>
               </div>
               
              <div className=' md:w-[63%]  pm:w-full md:mt-0  pm:mt-4 '>  <PhotoCollage/></div>
           </div>
           </div>
   </div>
   
  )
}

export default Interview
