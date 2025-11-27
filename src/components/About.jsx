import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const About = () => {
  const scrollRef = useRef(null);

  // initialize isMobile based on current window width (safe on SSR)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    // update on resize so large <-> mobile toggles correctly
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", onResize);
    // also run once to ensure correct value after mount
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // --- 1. ALWAYS CREATE Y TRANSFORMS (Desktop Only) ---
  const aboutYFull = useTransform(
    scrollYProgress,
    [0.1, 0.55, 0.7],
    [0, 0, -600]
  );
  const visionYFull = useTransform(
    scrollYProgress,
    [0.1, 0.55, 0.7],
    [0, 0, -800]
  );
  const missionYFull = useTransform(
    scrollYProgress,
    [0.55, 0.55, 0.75],
    [100, 0, -450]
  );

  // --- 2. ALWAYS CREATE OPACITY TRANSFORMS (Desktop/Full Scroll) ---
  const aboutOpacityFull = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.45],
    [0, 0.2, 1, 0.2]
  );
  const visionOpacityFull = useTransform(
    scrollYProgress,
    [0.26, 0.35, 0.55, 0.85],
    [0, 0.2, 1, 0.2]
  );
  const missionOpacityFull = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.85, 0.9],
    [0, 0.1, 1, 1]
  );

  // --- 3. MODIFIED MOBILE TRANSFORMS (Simple Reveal) ---
  // ABOUT: Fades and moves up in the first 25% of the mobile scroll
  const aboutOpacityMobile = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 0.9], // Fade in completes by 25% of scroll
    [0, 0.2, 1, 0.2, 0.2]
  );
  const aboutYMobile = useTransform(
    scrollYProgress,
    [0, 0.1, 0.45], // Move up 20px over the first 25% of scroll
    [20, 0, 0] // Start 20px down, end at 0px
  );

  // VISION: Fades and moves up roughly in the middle of the scroll
  const visionOpacityMobile = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 0.5, 0.6, 0.7, 0.9],
    [0, 0, 0.1, 0.2, 1, 0.2, 0.2]
  );
  const visionYMobile = useTransform(scrollYProgress, [0, 0, 0.66], [20, 0, 0]);

  // MISSION: Fades and moves up towards the end of the scroll
  const missionOpacityMobile = useTransform(
    scrollYProgress,
    [0, 0.4, 0.65, 0.8],
    [0, 0, 0.0, 1]
  );
  const missionYMobile = useTransform(
    scrollYProgress,
    [0, 0, 0.66],
    [20, 0, 0]
  );

  // --- 4. CHOOSE FINAL TRANSFORM VALUES ---
  // Y-Transforms (disabled on mobile)
  const aboutY = isMobile ? aboutYMobile : aboutYFull;
  const visionY = isMobile ? visionYMobile : visionYFull;
  const missionY = isMobile ? missionYMobile : missionYFull;

  // Opacity Transforms (separate for mobile)
  const aboutOpacity = isMobile ? aboutOpacityMobile : aboutOpacityFull;
  const visionOpacity = isMobile ? visionOpacityMobile : visionOpacityFull;
  const missionOpacity = isMobile ? missionOpacityMobile : missionOpacityFull;

  return (
    <section id="about" ref={scrollRef} className="relative w-full h-[300vh]">
      <div className="sticky max-md:py-[20px] top-0 flex flex-col justify-around align-middle h-auto min-h-[100vh] md:h-auto w-full overflow-hidden text-white bgred-400">
        {/* ABOUT */}
        <motion.div
          style={{
            opacity: aboutOpacity, // Uses the conditional opacity transform
            y: aboutY, // Uses the conditional Y transform
          }}
          className=" w-[90%]
            md:max-w-[650px] p-4 absolute top-[80px] md:top-[120px]
            md:left-[5%] md:translate-x-0 md:text-left
          "
        >
          <h1 className="mb-[24px] about-heading">About Us</h1>
          <p className="about-content">
            Excellence at Every Step. We blend advanced engineering with
            real-world application to deliver reliable, scalable robotics that
            perform seamlessly fast, precise, and trustworthy.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          style={{ opacity: visionOpacity, y: visionY }} // Uses conditional transforms
          className="w-[90%]
            md:max-w-[650px] p-4 absolute bottom-[35vh] md:top-[380px]
            md:left-auto md:right-[5%] md:translate-x-0 md:text-left
          "
        >
          <h1 className="mb-[24px] about-heading">Our Vision</h1>
          <p className="about-content">
            Pioneering change and powering possibilities—shaping a future where
            robotics empowers people with smarter, safer innovation.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          style={{ opacity: missionOpacity, y: missionY }} // Uses conditional transforms
          className=" w-[90%]
            md:max-w-[650px] p-4 absolute bottom-[0vh] md:top-[560px]
            md:left-[5%] md:translate-x-0 md:text-left
          "
        >
          <h1 className="mb-[24px] about-heading">Our Mission</h1>
          <p className="about-content">
            Driving a sustainable future through intelligent robotics, where
            innovation meets reliability and transforms vision into impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
