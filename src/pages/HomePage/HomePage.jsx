import React from 'react';

import Footer from '../../components/Footer/Footer';
import VideoIntro from '../../components/Video/VideoIntro';
import InterviewComponent from '../../components/Review/InterviewComponent';
function HomePage() {
  return (
    <div className="bg-white relative">
      <VideoIntro />
      <div className="relative text-center my-10">
        <div className="mb-5 text-center ">
          <h2 className=" font-oxa font-semibold text-[50px] text-primary capitalize">
            Giới thiệu
          </h2>
        </div>
        <div className="sm:mx-auto pm:mx-5">
          <InterviewComponent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
