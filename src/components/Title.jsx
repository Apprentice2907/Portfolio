// src/App.jsx
import React from "react";
import leftImage from "../assets/images/leftimg1.jpeg";
import rightImage from "../assets/images/rightimg1.jpeg";
import stampImage from "../assets/images/stamp.png";
import tiresImage from "../assets/images/Tires.png";
import avatarImage from "../assets/images/605c679f33f67d3dd00b04b4_avatar-3.jpeg";
import arrowImage from "../assets/images/arrow-long.svg";
import hatAvatar from "../assets/images/605c70e48081716925e9832a_avatar-hat.jpeg";
import avatar2 from "../assets/images/605c6da4f1f8304440ee2e8c_avatar-2-p-1080.jpeg";
import trophy from "../assets/images/605c6fd0f6276ef0c6bacfa4_trophy-p-800.jpeg";

function App() {
  return (
    <div className="bg-[#1c1c19] text-[#1c1c19] min-h-screen w-full scroll-smooth -mt-[3vw]">
      <div className="bg-[#c5beb4] pt-[4vw]">
        <div className="flex flex-col justify-start items-start w-full px-[3vw]">

          {/* Pixel Section - corrected alignment */}
          <div className="w-full flex flex-col gap-[2vw]">
            <div className="w-full flex gap-[2vw]">
              <div className="w-[50%] flex flex-col gap-[4vw]">
                <div className="flex w-full h-[20vw] gap-[1vw] items-start">
                  <img
                    src={hatAvatar}
                    alt="Avatar Hat"
                    className="w-[14vw] h-full border border-black object-cover"
                  />
                  <h1 className="text-[28vw] pr-[1.2vw] -mt-[2.3vw] leading-[90%] text-[#1c1c19] font-['Canopee']">
                    The
                  </h1>
                </div>
                <h1 className="text-[28vw] text-[#1c1c19] -mt-[2.1vw] leading-[90%] font-['Canopee']">
                  <span className="font-['Domain']">CO</span>de
                </h1>
              </div>
                <div className="w-[50%] flex items-stretch">
                <img
                  src={avatar2}
                  alt="Avatar 2"
                  className="object-cover border border-black w-[680px] h-[680px]"
                />
              </div>

            </div>

            <div className="w-full flex gap-[2vw] items-center -mt-[4vw]">
              <img
                src={trophy}
                alt="Trophy"
                className="w-[20vw] h-[20vw] object-cover border border-black"
              />
              <h1 className="text-[29vw] leading-[90%] text-[#1c1c19] font-['Canopee']">
                <span className="font-['Domain']">C</span>anvas
              </h1>
            </div>

            <div className="w-full flex gap-[2vw] -mt-[2.3vw]">
              <div className="h-[23vw] flex justify-center items-center bg-[#1c1c19] p-[2vw]">
                <h1 className="text-[25vw] text-[#c5beb4] font-['Canopee'] tracking-[-1.5vw]">
                  <span className="font-['Domain']">C</span>RAFTER
                </h1>
              </div>
              <div className="flex flex-col justify-center gap-[1vw]">
                <p className="text-[2vw] text-[#1c1c19] leading-[2.5vw] font-['Editorial']">
                  Over the past few years, I've collaborated on exciting projects, built clean and user-friendly websites. Constantly learning and leveling up along the way.
                </p>
                <h1 className="text-[8vw] text-[#1c1c19] font-['Canopee'] leading-[6vw]">
                  PROJECTS
                </h1>
                <p className="text-[2vw] text-[#1c1c19] leading-[2.5vw] font-['Editorial']">
                  Client builds, personal experiments, UI/UX challenges, hackathons, and more.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
