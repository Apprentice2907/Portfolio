import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";

const TechStackSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate marquee text loop
    const marqueeTween = gsap.to("#marquee", {
      x: "-100%",
      repeat: -1,
      duration: 3,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 100),
      },
      paused: false,
    });

    const marqueeContainer = document.querySelector(".marquee");
    if (marqueeContainer) {
      marqueeContainer.addEventListener("mouseenter", () => marqueeTween.pause());
      marqueeContainer.addEventListener("mouseleave", () => marqueeTween.resume());
    }
    gsap.registerPlugin(ScrollTrigger);

    const scrollContainer = document.querySelector(".main");
    if (!scrollContainer) return;

    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollContainer.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      locoScroll.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="main bg-[#c5beb4] px-[2.5vw] ">
      {/* Projects Section */}
      <div className="allwork flex justify-around items-center pt-[3vw] pb-[3vw] w-full border-black border-t `mt-[2vw]`">
        <div className="alefts w-[30%]">
          <div className="imgs w-full border border-black" id="imgDiv">
            <img src="../src/assets/images/SIgnup.jpg" alt="" className="w-full" id="hoverImg" />
          </div>
          <div className="flex justify-start items-center"> 
            <h1 className="font-canopee text-[3vw] items-center">
              <span className="font-domain">TO-DO </span>
              <span className="font-domain">BOO</span>STER
            </h1>
            <span className="text-[1.2vw] bg-red-600 text-[#c5beb4] rounded px-1 font-domain ml-2">New</span>
          </div>
          <p className="font-editorial text-[1.2vw]">
            A fun and colorful productivity web app designed to help users organize tasks with playful illustrations and a cheerful user experience.
          </p>
        </div>

        <div className="amids flex justify-center flex-col items-center w-[30%] pl-[2vw] pr-[2vw] border-black border-r border-l">
          <h1 className="font-canopee text-[4vw] text-center">
            ALL W<span className="font-domain">O</span>RK!
          </h1>
          <h1 className="font-editorial text-[2.6vw] text-center">
            Handpicked Highlights - spanning the last few years.
          </h1>
          <h3 className="font-editorial text-[1vw] text-[#1c1c19] text-center">
            <span className="font-canopee text-[1.4vw]">TIP!</span> Click on the image to explore
          </h3>
        </div>

        <div className="alefts w-[30%]">
          <div className="imgs w-full border border-black" id="imgDiv">
            <a href="https://www.redbull.com/">
              <img src="../src/assets/images/intro.jpg" alt="" className="w-full" id="hoverImg" />
            </a>
          </div>
          <div className="flex justify-start items-center">
            <h1 className="font-canopee text-[3vw] items-center">REDBULL SITE</h1>
            <span className="text-[1.2vw] bg-red-600 text-[#c5beb4] rounded px-1 domain ml-2">New</span>
          </div>
          <p className="font-editorial text-[1.2vw]">
            A sleek, immersive landing page showcasing Red Bull’s branding through bold visuals, interactive layout, and product-focused storytelling.
          </p>
        </div>
      </div>

      {/* Email Carousel */}
      <div className="marquee w-full flex justify-center items-center overflow-hidden border-black border-t border-b py-[1vw] mb-[2vw]">
        {[...Array(3)].map((_, i) => (
          <p key={i} className="font-editorial text-[5vw] font-thin leading-tight whitespace-nowrap mr-[1.2vw]" id="marquee">
            Lets Create Something Together
            <a href="mailto:princebhadania007@gmail.com">
              <span className="font-canopee text-[6vw] bg-[#1c1c19] text-[#c5beb4] px-[2vw] py-[0.5vw] leading-none tracking-tight uppercase">EMAIL ME</span>
            </a>
          </p>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "0px 0px 5px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          fontSize: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
          <div
            style={{
                            fontWeight: "bold",
              fontSize: "25px",
              fontFamily: 'Playfair Display',
              textTransform: "uppercase",
            }}
          >
            PRINCE©
          </div>
          <img
            src="https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/60474834660f934090d42877_stamp.png"
            alt="Stamp"
            style={{ height: "40px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            fontFamily: 'Playfair Display',
            fontSize: "1.2vw",
          }}
        >
          <a
            href="https://x.com/PrinceBhadania?t=09PPW1TkvZVzTjVATj4Nfw&s=09"
            target="_blank"
            style={{
              textTransform: "uppercase",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            TWITTER
          </a>
          <span style={{ pointerEvents: "none" }}>·</span>
          <a
            href="https://www.instagram.com/apprentice._.learning?igsh=enp3djhweTZmamR3"
            target="_blank"
            style={{
              textTransform: "uppercase",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            INSTAGRAM
          </a>
          <span style={{ pointerEvents: "none" }}>·</span>
          <a
            href="https://dribbble.com/Apprentice_prince007"
            target="_blank"
            style={{
              textTransform: "uppercase",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            DRIBBBLE
          </a>
          <span style={{ pointerEvents: "none" }}>·</span>
          <a
            href="https://www.behance.net/princebhadania1"
            target="_blank"
            style={{
              textTransform: "uppercase",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            BEHANCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
