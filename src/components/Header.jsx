// src/App.jsx
import React from "react";
import leftImage from "../assets/images/leftimg1.jpeg";
import rightImage from "../assets/images/rightimg1.jpeg";
import stampImage from "../assets/images/stamp.png";


function App() {
  return (
    <div className="bg-[#c5beb4] text-[#1c1c19] w-full">
      {/* Main Section */}
      <div className="bg-[#c5beb4] pt-[2vw]">
        <div className="flex flex-col justify-start items-start w-full px-[3vw]">

          {/* PRINCE Banner */}
          <div className="w-full h-[65vh] bg-[#1c1c19] flex justify-center items-center p-8 mt-4">
            <h1 className="text-[#c5beb4] text-[33vw] font-['Canopee']">PRINCE</h1>
          </div>

          {/* About Section */}
          <div className="w-full mt-[3vw] flex">
            {/* Left */}
            <div className="w-[35%] border-r border-gray-600 flex flex-col gap-4 pr-[3vw]">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-[8vw] uppercase text-center leading-[8vw] text-[#1c1c19] font-['Canopee']">
                  Intera<span className="font-['Domain']">C</span>tive
                </p>
                <p className="text-[12vw] uppercase text-center leading-[8vw] text-[#1c1c19] font-['Canopee']">
                  Artist!
                </p>
              </div>
              <img src={leftImage} alt="Left" className="w-full border border-black" />
              <div className="flex flex-col gap-0 w-full">
                <div className="flex w-full">
                  <h1 className="w-[35%] bg-[#1c1c19] text-[#c5beb4] text-[6vw] font-bold font-['Dynasty']">
                    A
                  </h1>
                  <p className="text-[2vw] pl-2 leading-[3vw] text-[#1c1c19] font-['Editorial']">
                    s a B.Tech CSE (Artificial Intelligence) student and multidisciplinary freelancer,
                  </p>
                </div>
                <p className="text-[2.2vw] leading-[3vw] text-[#1c1c19] font-['Editorial']">
                  I'm passionate about building impactful digital experiences by combining AI, creative coding, and UI/UX design.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="w-[65%] pl-[3vw]">
              <img src={rightImage} alt="Right" className="w-full border border-black" />
              <div className="flex flex-col justify-start items-start mt-[3vw]">
                <h1 className="uppercase text-[8vw] text-[#1c1c19] font-bold leading-[7.9vw] font-['Canopee']">
                  py<span>t</span>hon appren<span>t</span>i<span>c</span>e
                </h1>
                <h1 className="uppercase text-[8vw] text-[#1c1c19] font-bold leading-[7.9vw] font-['Canopee']">
                  UI/UX Desi<span>g</span>ner
                </h1>
                <h1 className="uppercase text-[7.5vw] text-[#1c1c19] font-bold leading-[7.9vw] font-['Canopee']">
                  <span>f</span>ullstack devel<span>o</span>per
                </h1>
                <h1 className="uppercase text-[7.5vw] text-[#1c1c19] font-bold leading-[7.9vw] font-['Canopee']">
                  Design. Build. <span>Repeat.</span>
                </h1>
              </div>
            </div>
          </div>

          {/* Website Section */}
          <div className="w-full flex justify-between items-center mt-[3vw]">
            <div className="w-[75.5%] h-[58vh] bg-[#1c1c19] flex justify-center items-center mt-4">
              <h1 className="text-[#c5beb4] text-[30vw] tracking-[-1.5vw] font-['Canopee']  -ml-[25px]">WEBSITE</h1>
            </div>
            <img src={stampImage} alt="Stamp" className="w-[21vw] max-w-[30vw] float-right" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;