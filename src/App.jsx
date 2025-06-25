// App.jsx
import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import Title from "./components/Title";
import Cards from "./components/Cards";
import Redbull from "./components/Redbull";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    setTimeout(() => {
      locoScroll.update();
    }, 1000);

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="main bg-[#1c1c19] text-[#1c1c19] font-sans overflow-x-hidden"
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Banner + About + Website sections */}
      <section className="bg-[#c5beb4] w-full">
        <Header />

        {/* ✅ Work + Awwwards Section */}
        <Work />
        <Title />
        <Cards />
        <Redbull />
      </section>
    </div>
  );
}

export default App;
