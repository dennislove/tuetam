import React from 'react';
import TourMember from './TourMember';
import Accourdion from './Accourdion';
import data from '../../assets/data.json';

function Tourament() {
  const touraments = data.tourament;

  return (
    <div className="max-w-[1300px] bg-[#000022] lg:m-auto md:mx-10 sm:mx-16 relative">
      <div className="font-normal  md:text-[40px] sm:text-[35px] pm:text-[30px] text-yellow-600 capitalize font-oxa text-center">
        TUỆ TÂM
      </div>
      <div className="font-semibold  lg:text-[30px]  sm:text-[26px] pm:text-[22px] text-white capitalize font-pop text-center">
        Tiêu Chí Hàng Đầu
      </div>

      <div className="mt-[50px]  grid  md:grid-cols-5 sm:grid-cols-2 pm:grid-cols-1">
        <div className=" md:col-span-3 sm:col-span-2 pm:col-span-1 w-full mb-10 ">
          <TourMember />
        </div>

        <div className="col-span-2 md:mx-auto pm:mx-10">
          <Accourdion items={touraments} />
        </div>
      </div>
    </div>
  );
}

export default Tourament;
