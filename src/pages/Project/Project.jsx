import React from 'react'
import Footer from '../../components/Footer/Footer'
import Payment from '../../components/Payment/Payment'

function Project() {
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto relative pt-10'>
        <div className='relative text-center '>
            <div className=' text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-yellow-600 capitalize'>Dịch vụ</h2>
            </div>
            {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
            <Payment/>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Project
