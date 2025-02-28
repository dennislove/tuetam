import React from 'react';
import Tourament from '../../components/Tour/Tourament';

import Footer from '../../components/Footer/Footer';
import VideoIntro from '../../components/Video/VideoIntro';
import InterviewComponent from '../../components/Review/InterviewComponent';
function HomePage() {
  return (
    <div className="bg-white relative">
      <VideoIntro />
      <div className="relative text-center my-10">
        <div className="mb-5 text-center ">
          <h2 className=" font-oxa font-normal text-[40px] text-primary capitalize">
            Giới thiệu
          </h2>
        </div>
        <div className="sm:mx-auto pm:mx-5">
          <InterviewComponent />
        </div>
      </div>
      <div className="mt-10">
        {/* <Tourament /> */}

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
