import React from 'react'
import CountUp from "react-countup";

function CountView() {
  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1 max-w-[1300px] m-auto relative '>
        <div className='flex flex-col justify-center items-center '>
            <h4 className=' uppercase font-bold text-yellow-600'>Tình hình</h4>
            <h1 className='text-3xl font-bold text-white'>Đánh giá tổng quát</h1>
        </div>
        <div className='grid grid-cols-1'>
            <section className=' border-b grid grid-cols-2 '>
                <div className='py-8 px-10 border-r text-yellow-600'><CountUp end={5} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                    <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>Năm Kinh Nghiệm +</p>
                </div>
                <div className='py-8 px-10 text-white'><CountUp end={2000} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                    <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>Khách Hài Lòng</p>
                </div>
            </section>
            <section className=' border-b grid grid-cols-2 text-white '>
                <div className='py-8 px-10 border-r '><CountUp end={300} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                    <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>sản phẩm +</p>
                </div>
                <div className='py-8 px-10 text-yellow-600'><CountUp end={4} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                    <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>đơn vị hợp tác</p>
                </div>
            </section>
            <section className='  grid grid-cols-2 '>
                <div className='py-8 px-10 border-r text-yellow-600'><CountUp end={3} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                    <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>chi nhánh</p>
                </div>
                <div className='py-8 px-10 text-white'><CountUp end={5} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                    <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>chuyên gia +</p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default CountView
