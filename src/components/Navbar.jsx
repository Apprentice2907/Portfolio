import React from "react";
import logo from "../assets/images/logo.svg";
import introImage from "../assets/images/Intro Page.jpg";
import homeImage from "../assets/images/Home Page.jpg";

function App() {
  return (
    <div className="bg-[#1c1c19] text-[#1c1c19] w-full scroll-smooth overflow-x-hidden">
      {/* Fixed Navbar */}
      <div className="z-50 bg-[#c5beb4] fixed top-0 left-0 w-full h-[10vh] flex justify-between items-center border-b border-gray-600 px-[3vw]">
        <h2 className="text-[1rem] font-['Editorial']">Jamnagar, IN</h2>
        <img src={logo} alt="Logo" className="h-10 w-[150px]" />
        <i className="ri-menu-3-fill text-2xl"></i>
      </div>

      {/* Main Section */}
      <div className="bg-[#c5beb4] pt-[8vh]">
         <div className="flex justify-between items-start pt-[3vw] pb-[1vw] px-[3vw] w-full">
          {/* Left Card */}
          <div className="w-[30%]">
            <div className="w-full border border-black overflow-hidden transition-all duration-500">
              <img
                src={introImage}
                alt="Intro"
                className="w-full transition-all duration-500 hover:scale-125"
              />
            </div>
            <div className="flex justify-start items-center mt-2">
              <h1 className="text-[3vw] font-['Canopee']">
                <span className="font-['Domain']">C</span>hitra{" "}
                <span className="font-['Domain']">SAGA</span>
              </h1>
              <span className="text-[1.2vw] bg-red-600 text-[#c5beb4] rounded px-1 font-['Domain'] ml-2">
                New
              </span>
            </div>
            <p className="font-['Editorial'] text-[1.2vw] mt-2">
              Comic Saga is a stylized, immersive digital comic website that
              blends dramatic storytelling with interactive panels and visual
              animations.
            </p>
          </div>

          {/* Middle Info Block */}
          <div className="w-[30%] px-[2vw] border-x border-black text-center mt-[4vw]">
            <h1 className="text-[4vw] font-['Canopee']">
              ALL W<span className="font-['Domain']">O</span>RK!
            </h1>
            <h1 className="font-['Editorial'] text-[2.6vw] leading-[3vw] mt-2">
              A Featured selection the latest work - of the last years
            </h1>
            <h3 className="font-['Editorial'] text-[1vw] text-[#1c1c19] mt-2">
              <span className="font-['Canopee'] text-[1.4vw]">TIP!</span> Click
              on the image to explore
            </h3>
          </div>

          {/* Right Card */}
          <div className="w-[30%]">
            <div className="w-full border border-black overflow-hidden transition-all duration-500">
              <img
                src={homeImage}
                alt="Home"
                className="w-full transition-all duration-500 hover:scale-125"
              />
            </div>
            <div className="flex justify-start items-center mt-2">
              <h1 className="text-[3vw] font-['Canopee']">ART MUSEUM</h1>
              <span className="text-[1.2vw] bg-red-600 text-[#c5beb4] rounded px-1 font-['Domain'] ml-2">
                New
              </span>
            </div>
            <p className="font-['Editorial'] text-[1.2vw] mt-2">
              An elegant, immersive website that allows users to explore
              classical sculptures, artworks, and cultural exhibits from
              Renaissance-era museums.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
