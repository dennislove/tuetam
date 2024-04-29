import React from 'react'
import {Link} from 'react-router-dom'
import video from '../../images/videointro.mp4'

function VideoIntro() {
  return (
    <div className=' relative'>
        <div className='p-5 absolute flex gap-5 md:bottom-1/2 md:right-[60%] sm:right-1/2 sm:bottom-1/2 pm:mx-2 pm:right-0 pm:bottom-0 rounded-lg bg-slate-50 '>
            <Link to='/gioi-thieu' className=' '>
                <button className=" relative lg:px-8 md:px-6 lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                          duration-1000 ease-in-out inline-block overflow-hidden capitalize shadow-md hover:bg-yellow-600 hover:text-white
                          before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
                      before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
                     CHI TIẾT
                      </button>
            </Link>
        <div className=' flex flex-col'>
            <h2 className='font-semibold'>DỊCH VỤ QUẢNG CÁO TRẦM HƯƠNG</h2>
            <span className=' text-center font-oxa text-yellow-600'>TUỆ TÂM</span>
        </div>
       
        </div>
      <video src={video} className='w-full  pointer-events-none' autoPlay controls muted loop ></video>

    </div>
  )
}

export default VideoIntro
