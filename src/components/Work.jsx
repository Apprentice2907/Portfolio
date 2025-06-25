// src/App.jsx
import React from "react";
import leftImage from "../assets/images/leftimg1.jpeg";
import rightImage from "../assets/images/rightimg1.jpeg";
import stampImage from "../assets/images/stamp.png";
import tiresImage from "../assets/images/Tires.png";
import avatarImage from "../assets/images/605c679f33f67d3dd00b04b4_avatar-3.jpeg";
import arrowImage from "../assets/images/arrow-long.svg";

function App() {
  return (
    <div className="bg-[#1c1c19] text-[#1c1c19] min-h-screen w-full scroll-smooth">
      <div className="bg-[#c5beb4] pt-[4vw]">
        <div className="flex flex-col justify-start items-start w-full px-[3vw]">

          {/* Existing previous sections... */}

          {/* Work Section */}
          <div className="flex w-full mt-[3vw] mb-[3vw]">
            <div className="w-[65%] flex flex-wrap border-r border-black">
              <div className="w-[40%] pr-[3vw] flex flex-col justify-between" style={{ padding: '0 10px 0 0', height: '38%' }}>
                <div>
                  <h1 className="text-[4vw] uppercase text-[#1c1c19] font-['Canopee']">
                    Up<span className="font-['Domain']">CO</span>min<span className="font-['Domain']">G</span> <span>&nbsp;Next</span>
                  </h1>
                  <p className="text-[2.1vw] leading-[3vw] text-[#1c1c19] font-['Editorial']">
                    Fresh Ideas – Exploring new ways to blend creativity with code, design, and storytelling.
                  </p>
                </div>
                <h3 className="text-[1vw] text-[#1c1c19] font-['Editorial']">
                  <span className="text-[1.4vw] font-['Canopee']">TIP!</span> Click to discover what's been on my mind lately
                </h3>
              </div>
              <div className="w-[60%] flex flex-col justify-start items-start gap-2 pl-[3.5vw] pr-[2vw] border-l border-black">
                <div className="flex flex-col justify-start items-start gap-2 pr-[2vw]">
                  <div className="w-full border border-black">
                    <img src={tiresImage} alt="Tires" className="w-full overflow-hidden" />
                  </div>
                  <h1 className="text-[3vw] text-[#1c1c19] font-['Canopee']">Formula 1</h1>
                  <p className="text-[1.2vw] text-[#1c1c19] font-['Editorial']">
                    Full Throttle is a bold, high-octane web experience capturing the adrenaline, precision, and legacy of Formula 1 — where cutting-edge design meets the roar of racing history.
                  </p>
                </div>
              </div>
              <div className="w-full pr-[3vw] pt-[3vw]">
                <img src={avatarImage} alt="Avatar" className="w-full" />
              </div>
            </div>
            <div className="w-[35%] pl-[3vw]">
              <h1 className="uppercase text-[6.6vw] text-[#1c1c19] leading-[7.9vw] font-['Canopee']">
                Think,<span className="font-['Domain']"> C</span>reate
              </h1>
              <div className="w-full mb-[3vw]">
                <h1 className="uppercase text-[13vw] text-[#1c1c19] leading-[8vw] font-['Canopee']">
                  Deliver
                </h1>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex w-full">
                  <h1 className="bg-[#1c1c19] text-[#c5beb4] font-bold text-[6vw] font-['Dynasty']">A</h1>
                  <p className="text-[2vw] pl-2 leading-[3vw] text-[#1c1c19] font-['Editorial']">
                    great digital experience starts with a clear plan. I design clean and user-friendly interfaces,
                  </p>
                </div>
                <p className="text-[2vw] pl-2 leading-[2.5vw] text-[#1c1c19] font-['Editorial']">
                  build strong backend systems, and turn ideas into working websites and apps.
                </p>
              </div>
              <p className="text-[2vw] mt-[3vw] leading-[2.5vw] text-[#1c1c19] font-['Editorial']">
                Like a digital builder, I connect design and code to create smooth and easy-to-use experiences. From first sketches to final launch, I handle every step to bring ideas to life. I mix creativity and logic like masala in a chai pot.
              </p>

                  {/* Arrow Section (Slide In Hover Animation) */}
              <div className="border border-black h-[12vw] w-full rounded-[50%] mt-[3vw] relative group overflow-hidden">
                <a
                  href="https://www.linkedin.com/in/prince-bhadania-0508p2907?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="flex items-center justify-start w-full h-full group overflow-hidden relative"
                >
                  <h1
                    className="text-[5vw] h-full w-full flex justify-center items-center font-['Canopee'] transition-all duration-700 group-hover:translate-x-[140%]"
                  >
                    All w<span className="font-['Domain']">O</span>rk
                  </h1>
                  <img
                    src={arrowImage}
                    alt="Arrow"
                    className="absolute left-[-70%] h-[30%] transition-all duration-700 group-hover:translate-x-[130%]"
                    width="300"
                    height="500"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Awwwards Section */}
          <div className="w-full h-[10vw] border-y border-black flex justify-between gap-[2vw] items-center mb-[3vw]">
            {[
              { label: 'Completed', title: 'W', highlight: 'ORK', count: '10' },
              { label: 'Professional', title: 'Desi', highlight: 'GN', count: '20' },
              { label: 'Years of', title: '', highlight: 'CODING', count: '4' },
              { label: 'Technologies', title: 'Kn', highlight: 'OWN', count: '4' }
            ].map((item, idx) => (
              <div key={idx} className="w-1/4 flex justify-center items-center text-center gap-2">
                <div>
                  <h1 className="uppercase text-[1.7vw] leading-[2vw] font-['Editorial'] text-[#1c1c19]">
                    {item.label}
                  </h1>
                  <h1 className="text-[5vw] leading-[6vw] font-['Canopee'] text-[#1c1c19]">
                    {item.title}<span className="font-['Domain']">{item.highlight}</span>
                  </h1>
                </div>
                <h1 className="font-['Domain'] text-[8vw] text-[#1c1c19]">{item.count}</h1>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
