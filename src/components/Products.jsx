import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Runway scroll tracking
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Card animations (EXACT like your UI)
  const card1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.33], [400, 260, 260, 50]);
  const robo1opacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1]);
  const robot1Y = useTransform(scrollYProgress, [0, 0.1], [-100, 50]);
  const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 1]);

  const card2 = useTransform(scrollYProgress, [0.33, 0.43, 0.58, 0.66], [400, 260, 260, 50]);
  const robo2opacity = useTransform(scrollYProgress, [0.33, 0.43, 0.58], [0, 1, 1]);
  const robot2Y = useTransform(scrollYProgress, [0.33, 0.43], [-100, 50]);
  const text2Opacity = useTransform(scrollYProgress, [0.33, 0.43, 0.58], [0, 1, 1]);

  const card3 = useTransform(scrollYProgress, [0.66, 0.76, 0.9, 1.0], [400, 260, 260, 50]);
  const robo3opacity = useTransform(scrollYProgress, [0.66, 0.76, 0.8], [0, 1, 1]);
  const robot3Y = useTransform(scrollYProgress, [0.66, 0.76], [-100, 50]);
  const text3Opacity = useTransform(scrollYProgress, [0.66, 0.76, 0.8], [0, 1, 1]);

  const allContentOpacity = useTransform(scrollYProgress, [0, 0.1], [0.4, 1]);
  const bottomsec = useTransform(scrollYProgress, [0.05, 0.1], [420, 30]);
  const bottomsecopacity = useTransform(scrollYProgress, [0.05, 0.1], [1, 0]);

  return (
    <section id="products" ref={scrollRef} className="relative w-full h-[1200vh]">
      
      {/* 🟩 Sticky viewport (correct structure) */}
      <div className="sticky top-[50px] min-h-screen flex flex-col justify-center overflow-hidden">

        <motion.div style={{ opacity: allContentOpacity }}>

          {/* Title + Description */}
          <div className="text-white flex flex-col px-[10px] mb-12">
            <h1 className=" text-center about-heading">Our Products</h1>
            <p className="about-content text-center">
              From AI-powered surveillance to intelligent humanoids, Anvi Robotics delivers cutting-
              <br />
              edge products designed for smarter, safer, and faster solutions.
            </p>
          </div>

          {/* Cards Row */}
          <div className="flex h-auto justify-evenly relative">

            {/* Humanoid Robot */}
            <div className="h-[420px] relative max-w-[300px] w-[300px]">
              <motion.div
                style={{ height: card1, position: "absolute", bottom: 0, backgroundColor: "#00000032" }}
                className="rounded-[16px] w-[300px]"
              >
                <motion.div
                  style={{ opacity: robo1opacity, bottom: robot1Y }}
                  className="absolute w-full flex justify-center"
                >
                  <img className="h-[300px]" src="/images/Humanoid.png" />
                </motion.div>

                <motion.div
                  style={{ opacity: text1Opacity ,}}
                  className="robotype absolute bottom-2 w-full text-center  text-[#ffffff54] text-[22px]"
                >
                  Humanoid Robot
                </motion.div>
              </motion.div>
            </div>

            {/* Surveillance Robot */}
            <div className="h-[420px] relative max-w-[300px] w-[300px]">
              <motion.div
                style={{ height: card2, position: "absolute", bottom: 0, backgroundColor: "#00000032" }}
                className="rounded-[16px] w-[300px]"
              >
                <motion.div
                  style={{ opacity: robo2opacity, bottom: robot2Y }}
                  className="absolute w-full flex justify-center"
                >
                  <img className="h-[300px]" src="/images/Surveillance.png" />
                </motion.div>

                <motion.div
                  onClick={() => navigate("/survillance")}
                  style={{ opacity: text2Opacity }}
                  className="robotype absolute bottom-2 w-full text-center cursor-pointer text-[#ffffff54] text-[22px]"
                >
                  Surveillance Robot
                </motion.div>
              </motion.div>
            </div>

            {/* Semi-Humanoid Robot */}
            <div className="h-[420px] relative max-w-[300px] w-[300px]">
              <motion.div
                style={{ height: card3, position: "absolute", bottom: 0, backgroundColor: "#00000032" }}
                className="rounded-[16px] w-[300px]"
              >
                <motion.div
                  style={{ opacity: robo3opacity, bottom: robot3Y }}
                  className="absolute w-full flex justify-center"
                >
                  <img className="h-[300px]" src="/images/Semi-Humanoid.png" />
                </motion.div>

                <motion.div
                  style={{ opacity: text3Opacity }}
                  className="robotype absolute bottom-2 w-full text-center text-[#ffffff54] text-[22px]"
                >
                  Semi-Humanoid Robot
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Fade Section */}
            <motion.div
              style={{ opacity: bottomsecopacity, height: bottomsec }}
              className="absolute bottom-[-100px] bg-black w-full"
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
};
