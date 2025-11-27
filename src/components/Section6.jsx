import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "Commercial & Industrial",
    desc: "Warehouses, factories, and corporate facilities",
    img: "/surveillance/b31.png",
  },
  {
    title: "Public Safety",
    desc: "Parks, transit stations, and government buildings",
    img: "/surveillance/G6.png",
  },
  {
    title: "Residential",
    desc: "Gated communities and residential complexes",
    img: "/surveillance/F4.png",
  },
  {
    title: "Retail & Malls",
    desc: "Shopping centers and retail environments",
    img: "/surveillance/B6.png",
  },
  {
    title: "Agriculture & Large properties",
    desc: "Farms, vineyards, and expansive outdoor areas",
    img: "/surveillance/A10.png",
  },
];

export const Section6 = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const totalCards = cards.length;

  return (
    <section
      ref={scrollRef}
      className="relative w-full bg-black"
      style={{ height: `${(totalCards - 1) * 100 + 100}vh`, md: { paddingBottom: "60px" }}}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-[150px] py-[60px] overflow-hidden">
        {/* Section Title */}
        <h1 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-white mb-8 lg:mb-12 text-center z-10">
          Perfect For Any Environment
        </h1>

        {/* Card Container */}
        <div className="relative w-full flex-1 h-[200px] md:h-[600px]">
          {cards.map((card, index) => {
            const isLeftImage = index % 2 === 0;

            const transitionDuration = 1 / (totalCards - 1);
            const start = index === 0 ? 0 : (index - 1) * transitionDuration + transitionDuration * 0.2;
            const middle = index * transitionDuration;
            const end = index === totalCards - 1 ? 1 : (index + 1) * transitionDuration * 0.2 + middle;

            // Opacity
            const opacity = useTransform(
              scrollYProgress,
              index === 0
                ? [0, 0.05, end - 0.05, end]
                : index === totalCards - 1
                ? [start + 0.05, start + 0.1, 1, 1] // smooth fade-in for last card
                : [start, start + 0.05, end - 0.05, end],
              index === 0
                ? [1, 1, 1, 0]
                : index === totalCards - 1
                ? [0, 1, 1, 1]
                : [0, 1, 1, 0]
            );

            // Image Y movement
            const imageY = useTransform(
              scrollYProgress,
              index === 0
                ? [0, end]
                : index === totalCards - 1
                ? [start, middle]
                : [start, middle, end],
              isLeftImage
                ? index === 0
                  ? ["0%", "-120%"]
                  : index === totalCards - 1
                  ? ["120%", "0%"]
                  : ["120%", "0%", "-120%"]
                : index === 0
                ? ["0%", "120%"]
                : index === totalCards - 1
                ? ["-120%", "0%"]
                : ["-120%", "0%", "120%"]
            );

            // Text Y movement
            const textY = useTransform(
              scrollYProgress,
              index === 0
                ? [0, end]
                : index === totalCards - 1
                ? [start, middle]
                : [start, middle, end],
              isLeftImage
                ? index === 0
                  ? ["0%", "120%"]
                  : index === totalCards - 1
                  ? ["-120%", "0%"]
                  : ["-120%", "0%", "120%"]
                : index === 0
                ? ["0%", "-120%"]
                : index === totalCards - 1
                ? ["120%", "0%"]
                : ["120%", "0%", "-120%"]
            );

            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full grid grid-cols-2 md:grid-cols-2 gap-4 lg:gap-10 items-center"
              >
                {/* IMAGE BLOCK */}
                <motion.div
                  className={`w-full flex items-center justify-center ${isLeftImage ? "" : "md:order-2"}`}
                  style={{ y: imageY, opacity: opacity }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full min-h-[300px] lg:min-h-[500px] object-cover"
                  />
                </motion.div>

                {/* TEXT BLOCK */}
                <motion.div
                  className={`flex flex-col items-center justify-center text-center text-white px-6 py-8 min-h-[200px] sm:min-h-[250px] ${isLeftImage ? "md:order-2" : ""}`}
                  style={{
                    background: "linear-gradient(to bottom, rgba(35,138,255,0.18) 0%, rgba(235,235,235,0) 100%)",
                    y: textY,
                    opacity: opacity,
                  }}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                  <h2 className="text-[22px] lg:text-[30px] font-semibold mb-4">{card.title}</h2>
                  <p className="text-[16px] md:text-[22px] text-[#ffffff66]">{card.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
