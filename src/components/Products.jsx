import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductsList = [
  {
    label: "Humanoid Robot",
    imgUrl: "/images/Humanoid.png",
    Link: "",
  },
  {
    label: "Surveillance Robot",
    imgUrl: "/images/Surveillance.png",
    Link: "/surveillance",
  },
  {
    label: "Semi-Humanoid Robot",
    imgUrl: "/images/Semi-Humanoid.png",
    Link: "",
  },
];

export const Products = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Detect active image on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollX = container.scrollLeft;
      const width = container.clientWidth;
      const index = Math.round(scrollX / width);

      if (index !== activeIndex) {
        setFade(true); // fade-out
        setTimeout(() => {
          setActiveIndex(index);
          setFade(false); // fade-in
        }, 150); // fade duration
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Card animations (unchanged)
  const card1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.33],
    ["50vh", "40vh", "40vh", "7vh"]
  );
  const card2 = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.58, 0.66],
    ["50vh", "40vh", "40vh", "7vh"]
  );
  const card3 = useTransform(
    scrollYProgress,
    [0.66, 0.76, 0.9, 1.0],
    ["50vh", "40vh", "40vh", "7vh"]
  );

  const robot1Y = useTransform(scrollYProgress, [0, 0.1], [-80, 55]);
  const robot2Y = useTransform(scrollYProgress, [0.33, 0.43], [-80, 55]);
  const robot3Y = useTransform(scrollYProgress, [0.66, 0.76], [-80, 55]);

  const robo1opacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1]);
  const robo2opacity = useTransform(
    scrollYProgress,
    [0.33, 0.43, 0.58],
    [0, 1, 1]
  );
  const robo3opacity = useTransform(
    scrollYProgress,
    [0.66, 0.76, 0.8],
    [0, 1, 1]
  );

  const text1Opacity = robo1opacity;
  const text2Opacity = robo2opacity;
  const text3Opacity = robo3opacity;

  const allContentOpacity = useTransform(scrollYProgress, [0, 0.1], [0.4, 1]);

  const bottomsec = useTransform(scrollYProgress, [0.05, 0.1], ["55%", "0%"]);
  const bottomsecopacity = useTransform(scrollYProgress, [0.05, 0.1], [1, 0.2]);

  const DesktopProdCards = (
    <ul className="max-md:hidden flex flex-wrap px-4 justify-between md:gap-2 lg:gap-5 lg:justify-around overflow-hidden">
      {ProductsList.map((eachProd, index) => {
        const RoboOpacity =
          index === 0
            ? robo1opacity
            : index === 1
            ? robo2opacity
            : robo3opacity;
        const RobotY = index === 0 ? robot1Y : index === 1 ? robot2Y : robot3Y;
        const TextOpacity =
          index === 0
            ? text1Opacity
            : index === 1
            ? text2Opacity
            : text3Opacity;
        const CardHeight = index === 0 ? card1 : index === 1 ? card2 : card3;
        return (
          <li className="relative w-[280px] md:w-[25%] min-h-[45vh]">
            <motion.div
              style={{ height: CardHeight }}
              key={eachProd + (index + 1) + "desktop"}
              className="absolute bottom-0 rounded-[16px] w-full bg-[#00000032]"
            >
              <motion.div
                style={{ opacity: RoboOpacity, bottom: RobotY }}
                className="absolute w-full flex justify-center"
              >
                <img
                  className="h-[25vh] aspect-3/4 md:h-[30vh] w-[90%] object-contain"
                  src={eachProd.imgUrl}
                />
              </motion.div>

              <motion.div
                onClick={() => navigate(eachProd.Link)}
                style={{ opacity: TextOpacity }}
                className="robotype absolute bottom-[2vh] lg:bottom-[1.8vh] w-full cursor-pointer hover:text-[#ffffff90] text-center text-[#ffffff54] md:text-[16px] lg:text-[20px]"
              >
                {eachProd.label}
              </motion.div>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );

  const MobileProdCards = (
    <div className="md:hidden">
      <div>
        {/* Horizontal Carousel */}
        <ul
          ref={containerRef}
          className="w-full flex flex-row overflow-x-auto pt-[50px] overflow-y-visible snap-x snap-mandatory px-4 gap-[10vw] scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {ProductsList.map((eachProd, index) => (
            <li
              key={eachProd.label + index}
              className="w-full shrink-0 snap-center flex flex-col relative align-middle items-center"
            >
              <div className="w-full max-w-[300px] place-content-center">
                <div className="bg-[#00000030] w-full h-auto aspect-square flex justify-center align-middle rounded-t-[16px]">
                  <img
                    src={eachProd.imgUrl}
                    alt={eachProd.label}
                    className="w-full max-w-[400px] h-[40vh] absolute bottom-[50px] object-contain scale-[110%] translate-y-[-5%]"
                  />
                </div>
                <p
                  onClick={() => navigate(eachProd.Link)}
                  className="w-full h-[50px] flex justify-center cursor-pointer rounded-b-[16px] align-middle py-3 px-10 font-serif font-medium text-[16px] bg-[#111] text-white text-center transition-opacity duration-300"
                >
                  {eachProd.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* FIXED Title with Fade Animation */}
        <div className="w-[90vw] hidden max-w-[450px] m-auto flex justify-center bg-[#111] rounded-xl mt-4">
          <p
            className={`w-full font-serif font-medium text-[16px] text-white text-center py-4 transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {ProductsList[activeIndex].label}
          </p>
        </div>
      </div>

      {/* ⬇ Selected Dots */}
      <div className="w-full flex justify-center gap-2 mt-4">
        {ProductsList.map((_, i) => (
          <div
            key={i}
            className={`h-[8px] w-[8px] rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="products"
      ref={scrollRef}
      className="relative w-full min-h-screen md:min-h-[240vh]"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden">
        <motion.div
          style={{ opacity: window.innerWidth > 767 ? allContentOpacity : 1 }}
        >
          {/* Title */}
          <div className="w-full max-w-[90%] m-auto md:w-full text-left md:text-center px-4 mb-12">
            <h2 className="about-heading text-white">Our Products</h2>
            <p className="about-content md:max-w-[80%] max-md:mt-[24px] mx-auto text-[#ffffff90]">
              From AI-powered surveillance to intelligent humanoids, Anvi
              Robotics delivers cutting-edge products designed for smarter,
              safer, and faster solutions.
            </p>
          </div>

          {window.innerWidth > 767 ? DesktopProdCards : MobileProdCards}

          {/* Bottom Fade */}
          <motion.div
            style={{ opacity: bottomsecopacity, height: bottomsec }}
            className="max-md:hidden absolute bottom-0 bg-black w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};
