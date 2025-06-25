import React, { useState } from "react";

const stacks = [
  {
    title: "TOOLS AND TECH.",
    items: [
      ["git.png", "GIT"],
      ["github.png", "GITHUB/GITLAB"],
      ["rest.png", "RESTFULAPI"],
      ["djangorest.png", "DJANGO REST FRAMEWORK"],
      ["azure.png", "AZURE"],
      ["netlify.png", "DEPLOYMENT-VERCEL,NETLIFY..."],
    ],
  },
  {
    title: "DESIGN STACK",
    items: [
      ["figma.png", "FIGMA"],
      ["illustrator.png", "ADOBE ILLUSTRATOR"],
      ["photoshop.png", "ADOBE PHOTOSHOP"],
      ["lightroom.png", "ADOBE LIGHTROOM"],
      ["canva.png", "CANVA"],
      ["pen.png", "PEN & PAPER"],
    ],
  },
  {
    title: "BACKEND STACK",
    items: [
      ["node.png", "NODE.JS"],
      ["express.png", "EXPRESS.JS"],
      ["django.png", "DJANGO"],
      ["flask.png", "FLASK"],
      ["mongodb.png", "MONGODB"],
      ["sql.png", "SQL"],
    ],
  },
  {
    title: "FRONTEND STACK",
    items: [
      ["html.png", "HTML/CSS"],
      ["js.png", "JAVASCRIPT"],
      ["react.png", "REACT.JS"],
      ["next.png", "NEXT.JS"],
      ["tailwind.png", "TAILWIND CSS"],
      ["bootstrap.png", "BOOTSTRAP"],
    ],
  },
];

const TechStackCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    
    <div className="bg-[#C5BEB4] flex items-center justify-center py-10 w-full h-[500px] overflow-hidden mt-[3vw]">
      <div className="relative w-[1445px] h-[400px] overflow-hidden">
        {stacks.map((stack, index) => {
          const isAfterHovered = hoveredIndex !== null && index > hoveredIndex;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute w-[600px] h-[400px] border-[4px] border-black rounded-[15px] p-3 overflow-hidden transition-transform duration-300"
              style={{
                left: `${index * 280}px`,
                transform: isAfterHovered ? "translateX(240px)" : "translateX(0)",
                zIndex: index + 1,
                backgroundColor: hoveredIndex === index ? "#B5ACA0" : "#cdc6be",
              }}
            >
              <div
                className="h-full rounded-[8px] px-[30px] py-[10px] flex flex-col"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  backgroundColor: hoveredIndex === index ? "#B5ACA0" : "#cdc6be",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23000' stroke-width='2.5' stroke-dasharray='11%2c11' stroke-linecap='square'/%3e%3c/svg%3e\")",
                }}
              >
                <h1
                  className="text-[#1c1c19]"
                  style={{ fontSize: "61px", fontFamily: "Canopee", marginBottom: "0px" }}
                >

                  {stack.title}
                </h1>

                {stack.items.map(([img, label], i) => (
                  <div key={i} className="flex items-center mt-[1px]">
                    <img
                      src={`/images/${img}`}
                      alt={label}
                      width={28}
                      height={28}
                    />
                    <h1
                      className="ml-5 text-[28px]"
                      style={{ fontWeight: 400, fontFamily: "'Playfair Display', serif" }}
                    >
                      {label}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackCards;
