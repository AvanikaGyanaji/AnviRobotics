import React, { useState, useEffect, useRef } from "react";

const cards = [
  {
    title: "Commercial & Industrial",
    desc: "Warehouses, factories, and corporate facilities",
    img: "/survillance/b31.png",
  },
  {
    title: "Public Safety",
    desc: "Parks, transit stations, and government buildings",
    img: "/survillance/G6.png",
  },
  {
    title: "Residential",
    desc: "Gated communities and residential complexes",
    img: "/survillance/F4.png",
  },
  {
    title: "Retail & Malls",
    desc: "Shopping centers and retail environments",
    img: "/survillance/B6.png",
  },
  {
    title: "Agriculture & Large properties",
    desc: "Farms, vineyards, and expansive outdoor areas",
    img: "/survillance/A10.png",
  },
];

export const Section6 = () => {
  const [active, setActive] = useState(0);
  const isScrolling = useRef(false);
  const sectionRef = useRef(null);
  const inView = useRef(false);

  // Detect if Section6 is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        inView.current = entries[0].isIntersecting;
      },
      { threshold: 0.55 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Scroll only inside Section6
  useEffect(() => {
    const handleScroll = (e) => {
      if (!inView.current) return;
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        setActive((p) => Math.min(p + 1, cards.length - 1));
      } else {
        setActive((p) => Math.max(p - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 650);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 lg:px-[150px] md:py-[60px] overflow-hidden"
    >
      {/* Title */}
      <h1 className="text-[28px] md:text-[46px] font-semibold text-white lg:mb-12 text-center">
        Perfect For Any Environment
      </h1>

      {/* Animation Container */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {cards.map((card, index) => {
          const isLeftImage = index % 2 === 0;

          const leftOffset = (index - active) * 120;
          const rightOffset = (active - index) * 120;

          const leftTransform = `translateY(${leftOffset}%)`;
          const rightTransform = `translateY(${rightOffset}%)`;

          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full grid grid-cols-2 md:grid-cols-2 gap-4 lg:gap-10 items-center transition-all duration-[650ms] ease-out px-4"
            >
              {/* IMAGE BLOCK */}
              <div
                className={`w-full flex items-center justify-center ${
                  isLeftImage ? "" : "md:order-2"
                }`}
                style={{
                  transform: isLeftImage ? leftTransform : rightTransform,
                  opacity: index === active ? 1 : 0,
                  transition: "all 0.65s ease-out",
                }}
              >
                <img
                  src={card.img}
                  className="w-full h-[300px] lg:h-[600px] object-cover"
                />
              </div>

              {/* TEXT BLOCK with gradient background */}
              <div
                className={`flex flex-col items-center justify-center text-center text-white px-6 py-8 sm:h-[250px] h-[150px]${
                  isLeftImage ? "md:order-2" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(35, 138, 255, 0.18) 0%, rgba(235,235,235,0) 100%)",
                  transform: isLeftImage ? rightTransform : leftTransform,
                  opacity: index === active ? 1 : 0,
                  transition: "all 0.65s ease-out",
                }}
              >
                <h1 className="text-[22px] lg:text-[30px] font-semibold mb-4">{card.title}</h1>
                <p className="text-[16px] md:text-[22px] text-[#ffffff66] px-8">{card.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
