import React from 'react'
import data from '../../assets/data.json'
import tam from '../../images/tam.png'
import tri from '../../images/tri.png'
import tinh from '../../images/tinh.png'
import tin from '../../images/tin.png'

function TourMember() {
    const tourmembers = [
      {
        imgSrc:tam,
        imgAlt:"tourmember_1",
        description:"Cái 'Tâm' làm nên tảng quan trọng trong việc kinh doanh nói chung trong nghề trầm hương nói riêng."
    },
    {
        imgSrc:tinh,
        imgAlt:"tourmember_2",
        description:"Xây dựng đội ngũ tràn đầy TÌNH YÊU THƯƠNG, yêu khách hàng, yêu công việc. Và lan tỏa TÌNH YÊU THƯƠNG mọi lúc, mọi nơi."
    },
    {
        imgSrc:tin,
        imgAlt:"tourmember_3",
        description:"Tôn chỉ của Tuệ Tâm lấy chữ “ TÍN “ đặt lên hàng đầu, lấy chữ “TÍN” để xây dựng và phát triển mai sau."
    },
    {
        imgSrc:tri,
        imgAlt:"tourmember_4",
        description:"Đề cao TRÍ TUỆ sáng tạo, đổi mới, liên tục cải tiến áp dụng công nghệ hiện đại vào quản lý và nâng cao chất lượng sản phẩm – dịch vụ."
    }
    ]
   
  return (
    <div className='flex flex-col gap-8'>
        {tourmembers.map((item,index) =>(
       <div key={index} className='md:w-[70%] sm:w-[95%] pm:w-[92%] group items-center justify-center flex md:gap-8 relative'>
                <div className={
                    index % 2 === 0
                        ? "w-2/6 h-2/6 ml-20 md:translate-x-1/2 pm:translate-x-[70%]"
                        : "w-2/6 h-2/6 transform md:-translate-x-1/2 pm:-translate-x-[70%]"
                        }>
                            <img loading='lazy' src={item.imgSrc} alt={item.imgAlt} className='w-full h-full bg-cover transition-all delay-200'/>
                            <div className='h-[1px] w-full bg-white'></div>
                </div>
               
            <h3 className={
                index % 2 === 0
                ? "w-[47%] absolute md:ml-3 pm:ml-10 opacity-0 transform group-hover:-translate-x-1/2  transition ease-out duration-500 group-hover:opacity-100 text-white font-normal text-[15px] text-ellipsis overflow-hidden h-[90px]"
                : "w-[47%] absolute md:ml-3 pm:mr-10 opacity-0 transform group-hover:translate-x-3/4 transition ease-out duration-500 group-hover:opacity-100 text-white font-normal text-[15px] text-ellipsis overflow-hidden h-[90px]"
            }>{item.description}</h3>
       </div>
        ))}
    </div>  
  )
}

export default TourMember
