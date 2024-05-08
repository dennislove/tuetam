import React from 'react'
import {Link} from 'react-router-dom'
import video from '../../images/videointro.mp4'
import Button from '../Button/Button'

function VideoIntro() {
  return (
    <div className=' relative'>
        <div className='p-5 absolute flex gap-5 md:bottom-1/2 md:right-[60%] sm:right-1/2 sm:bottom-1/2 pm:mx-2 pm:right-0 pm:bottom-0 rounded-lg bg-[#00000030]'>
            <Link to='/gioi-thieu' className=' '>
              <Button name="CHI TIẾT"/>
            </Link>
        <div className=' flex flex-col'>
            <h2 className='font-semibold text-white '>DỊCH VỤ QUẢNG CÁO TRẦM HƯƠNG</h2>
            <span className=' text-center font-oxa text-yellow-600'>TUỆ TÂM</span>
        </div>
       
        </div>
      <video src={video} className='w-full  pointer-events-none' autoPlay controls muted loop ></video>

    </div>
  )
}

export default VideoIntro
