import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import PricingCard from '../../components/Payment/PricingCard';
import InterView from '../../components/Interview/InterView';
import ReviewJop from '../../components/Interview/ReviewJop';
import datas from '../../assets/data.json'

// import img from '../../images/bg_interview.png'

function Project() {
  
  const customer = datas.customer
  const [data, setData] = useState(customer);
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchSubmit = (searchTerm, selectedLocation) => {
    const filtered  = data.filter(item =>
      (item.jobs && searchTerm ? item.jobs.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
      (item.location && selectedLocation ? item.location === selectedLocation : true) 
  );
    setFilteredData(filtered );
  };


  const plans = [
    {
      option: "Medium",
      description:"Phù hợp cho các doanh nghiệp đã có nhiều năm kinh nghiệm.",
      price: "129,000",
      priceOld:"179,000",
      features: [
        {
            title:"Lượt hiển thị tin:",
            hot:"15%"
        },
        {
            title:"Lượng ảnh hiển thị:",
            hot:"10"
        },
        {
          title:"Lượng video hiển thị:",
          hot:"1"
      },
      ],
      buttonLabel: "Mua ngay"
    },
    {
      option: "High",
      description:"Lựa chọn phù hợp với các doanh nghiệp muốn khẳng định vị thế.",
      price: "239,000",
      priceOld:"289,000",
      features: [
        {
            title:"Lượt hiển thị tin:",
            hot:"30%"
        },
        {
            title:"Lượng ảnh hiển thị:",
            hot:"15"
        },
        {
          title:"Lượng video hiển thị:",
          hot:"2"
      },
      ],
      buttonLabel: "Mua ngay"
    },
    {
      option: "Premium",
      description:"Lựa chọn tốt nhất cho các doanh nghiệp vừa hoạt động.",
      price: "389,000",
      priceOld:"449,000",
      features: [
        {
            title:"Lượt hiển thị tin:",
            hot:"50%"
        },
        {
            title:"Lượng ảnh hiển thị:",
            hot:"25"
        },
        {
          title:"Lượng video hiển thị:",
          hot:"4"
      },
      ],
      buttonLabel: "Mua ngay"
    }
  ];
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto relative pt-10'>
        <div className='relative text-center '>
            <div className=' text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-yellow-600 capitalize'>Dịch vụ</h2>
            </div>
            {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
            <div className="flex justify-center space-x-4 ">
            <div className=" px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bảng giá quảng cáo</h2>
                  <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Đảm bảo tối ưu và tốt nhất cho các khách hàng lựa chọn.</p>
              </div>
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
  
            {plans.map(plan => (
                         <PricingCard key={plan.option} {...plan}  />
                      ))}
              </div>
          </div>
           </div>
           <div className="bg-[url(images/bginterview.png)] bg-cover px-4 pt-3 pb-10 ">
             <div className='my-10 text-center '>
                  <h2 className=' font-oxa font-normal text-[40px] text-white capitalize'>Tuyển dụng cho đối tác</h2>
                  <h2 className=' mt-3 font-normal text-base text-white italic '>NV Bán hàng - NV Sản xuất - NV Đóng gói - NV Điều chế - NV Marketing</h2>
              </div>
              <ReviewJop onSearchSubmit={handleSearchSubmit}/>
           </div>
                <InterView customers={filteredData}/>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Project
