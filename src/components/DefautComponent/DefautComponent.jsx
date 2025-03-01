import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import ScrollToTop from '../HeaderComponent/ScrollToTop ';
import Footer from '../Footer/Footer';

function DefautComponent({ children }) {
  return (
    <div className="relative">
      <div className=" sticky z-50 w-full">
        <HeaderComponent />
      </div>
      <div className=""> {children}</div>
      <div className=" absolute">
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
}

export default DefautComponent;
