import React from 'react'
import Footer from '../../components/Footer/Footer'
import CountView from '../../components/Review/CountView'
import InterviewComponent from '../../components/Review/InterviewComponent'

function InterViewCT() {
  return (
    <div className='bg-cover bg-[#000022] relative pt-10'>
      
        <div className='relative text-center mb-10'>
            <div className='mb-5 text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Giới thiệu</h2>
            </div>
            <div className='sm:mx-auto pm:mx-5'>
              <InterviewComponent/>
             <div className='  bg-[url("https://tramhuongannhien.vn/wp-content/uploads/2023/07/gia-tri-cot-loi-tam-huong-an-nhien.jpg")] bg-bottom bg-cover bg-fixed '>
                <div className='bg-[#00000090]'>  <CountView/></div>
              </div>
            </div>
        </div>
       
      <Footer/>
    </div>
  )
}

export default InterViewCT
