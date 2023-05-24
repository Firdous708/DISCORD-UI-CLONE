
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Landing from "./components/Landing";
import Landing1 from "./components/Landing1";
import Landing2 from "./components/Landing2";
import Landing3 from "./components/Landing3";
import Landing4 from "./components/Landing4";
import Footer from "./components/Footer";
import MobileNavigation from './components/MovileNavigation';
import MobileLanding from "./mobilecomponents/MobileLanding";

const App = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div>
      {isDesktop ? (
        <>
          <Landing />
          <Landing1 />
          <Landing2 />
          <Landing3 />
          <Landing4 />
          <Footer />
        </>
      ) : (
        <>
          <MobileNavigation />
          <MobileLanding />
          {/* <Landing1 />
          <Landing2 />
          <Landing3 />
          <Landing4 />
          <Footer /> */}
        </>
      )}
    </div>
  );
};

export default App;
