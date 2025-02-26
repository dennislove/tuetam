import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import PricingCard from '../../components/Payment/PricingCard';

import datas from '../../assets/data.json';

function Project() {
  const customer = datas.customer;
  const [data, setData] = useState(customer);

  const plans = [
    {
      option: 'Medium',
      description: 'Phù hợp cho các doanh nghiệp đã có nhiều năm kinh nghiệm.',
      price: '129,000',
      priceOld: '179,000',
      features: [
        {
          title: 'Lượt hiển thị tin:',
          hot: '15%'
        },
        {
          title: 'Lượng ảnh hiển thị:',
          hot: '10'
        },
        {
          title: 'Lượng video hiển thị:',
          hot: '1'
        }
      ],
      buttonLabel: 'Mua ngay'
    },
    {
      option: 'High',
      description:
        'Lựa chọn phù hợp với các doanh nghiệp muốn khẳng định vị thế.',
      price: '239,000',
      priceOld: '289,000',
      features: [
        {
          title: 'Lượt hiển thị tin:',
          hot: '30%'
        },
        {
          title: 'Lượng ảnh hiển thị:',
          hot: '15'
        },
        {
          title: 'Lượng video hiển thị:',
          hot: '2'
        }
      ],
      buttonLabel: 'Mua ngay'
    },
    {
      option: 'Premium',
      description: 'Lựa chọn tốt nhất cho các doanh nghiệp vừa hoạt động.',
      price: '389,000',
      priceOld: '449,000',
      features: [
        {
          title: 'Lượt hiển thị tin:',
          hot: '50%'
        },
        {
          title: 'Lượng ảnh hiển thị:',
          hot: '25'
        },
        {
          title: 'Lượng video hiển thị:',
          hot: '4'
        }
      ],
      buttonLabel: 'Mua ngay'
    }
  ];
  return (
    <div className="bg-cover bg-[#000022]">
      <div className=" max-w-[1300px] m-auto relative pt-10">
        <div className="relative text-center ">
          <div className=" text-center ">
            <h2 className=" font-oxa font-normal text-[40px] text-yellow-600 capitalize">
              Sản phẩm
            </h2>
          </div>
          {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
          <div className="flex justify-center space-x-4 ">
            <div className=" px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {plans.map((plan) => (
                  <PricingCard key={plan.option} {...plan} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project;
