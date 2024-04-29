import React from 'react'
import Project from '../../components/Project/Project'
import Tourament from '../../components/Tour/Tourament'
import SlideMember from '../../components/MemberCT/SlideMember'
import Footer from '../../components/Footer/Footer'
import VideoIntro from '../../components/Video/VideoIntro'

function HomePage() {
  return (
    <div className='bg-[#000022] relative'>
      <VideoIntro/>
      <div className='mt-10'>
        <Tourament/>
        <Project/>
        <SlideMember/>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage
