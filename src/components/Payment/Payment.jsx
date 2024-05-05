import React from 'react'
import PricingCard from './PricingCard';

function Payment() {
    const plans = [
        {
          option: "Medium",
          description:"Phù hợp cho các doanh nghiệp đã có nhiều năm kinh nghiệm.",
          price: "$5",
          features: [
            {
                title:"Lượt hiển thị tin:",
                hot:"20%"
            },
            {
                title:"Lượng ảnh hiển thị:",
                hot:"10"
            },
          ],
          buttonLabel: "Mua ngay"
        },
        {
          option: "High",
          description:"Lựa chọn phù hợp với các doanh nghiệp muốn khẳng định vị thế.",
          price: "$10",
          features: [
            {
                title:"Lượt hiển thị tin:",
                hot:"30%"
            },
            {
                title:"Lượng ảnh hiển thị:",
                hot:"15"
            },
          ],
          buttonLabel: "Mua ngay"
        },
        {
          option: "Premium",
          description:"Lựa chọn tốt nhất cho các doanh nghiệp vừa hoạt động.",
          price: "$15",
          features: [
            {
                title:"Lượt hiển thị tin:",
                hot:"45%"
            },
            {
                title:"Lượng ảnh hiển thị:",
                hot:"20"
            },
          ],
          buttonLabel: "Mua ngay"
        }
      ];
    
      return (
        <div className="flex justify-center space-x-4 p-8">
          <div class=" px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bảng giá quảng cáo</h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Đảm bảo tối ưu và tốt nhất cho các khách hàng lựa chọn.</p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

          {plans.map(plan => (
                        <PricingCard {...plan} />
                    ))}
            </div>
        </div>
         </div>
      );
    };
    

export default Payment
