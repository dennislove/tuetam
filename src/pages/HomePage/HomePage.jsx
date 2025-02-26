import React from 'react';
import Tourament from '../../components/Tour/Tourament';
import SlideMember from '../../components/MemberCT/SlideMember';
import Footer from '../../components/Footer/Footer';
import VideoIntro from '../../components/Video/VideoIntro';
import InterviewComponent from '../../components/Review/InterviewComponent';
function HomePage() {
  return (
    <div className="bg-[#000022] relative">
      <VideoIntro />
      <div className="relative text-center my-10">
        <div className="mb-5 text-center ">
          <h2 className=" font-oxa font-normal text-[40px] text-white capitalize">
            Giới thiệu
          </h2>
        </div>
        <div className="sm:mx-auto pm:mx-5">
          <InterviewComponent />
        </div>
      </div>
      <div className="mt-10">
        <Tourament />

        <SlideMember />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
