import React, { useRef,useState,useEffect } from "react";
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

  // --- Always create transforms (hooks must always run) ---
  const aboutYFull = useTransform(scrollYProgress, [0.1, 0.55, 0.7], [0, 0, -600]);
  const visionYFull = useTransform(scrollYProgress, [0.1, 0.55, 0.7], [0, 0, -800]);
  const missionYFull = useTransform(scrollYProgress, [0.55, 0.55, 0.75], [100, 0, -450]);

  // choose value at render time (no conditional hooks)
  const aboutY = isMobile ? 0 : aboutYFull;
  const visionY = isMobile ? 0 : visionYFull;
  const missionY = isMobile ? 0 : missionYFull;

  // always create opacity transforms
  const aboutOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.45], [0, 0.2, 1, 0.2]);
  const visionOpacity = useTransform(scrollYProgress, [0.26, 0.35, 0.55, 0.85], [0, 0.2, 1, 0.2]);
  const missionOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.85, 0.9], [0, 0.1, 1, 1]);

  return (
    <section id="about" ref={scrollRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden text-white">

        {/* ABOUT */}
        <motion.div
          style={{ opacity: aboutOpacity, y: aboutY }}
          className=" w-[90%]
            md:max-w-[650px] p-4 absolute top-[120px]

            /* Mobile centered */
            left-1/2 -translate-x-1/2 text-start

            /* Desktop left align */
            md:left-[5%] md:translate-x-0 md:text-left
          "
        >
          <h1 className="mb-[24px] about-heading">About Us</h1>
          <p className="about-content">
            Excellence at Every Step. We blend advanced engineering with
            real-world application to deliver reliable, scalable robotics
            that perform seamlessly fast, precise, and trustworthy.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          style={{ opacity: visionOpacity, y: visionY }}
          className="w-[90%]
            md:max-w-[650px] p-4 absolute top-[380px]

            /* Mobile centered */
            left-1/2 -translate-x-1/2 text-start

            /* Desktop right align */
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
          style={{ opacity: missionOpacity, y: missionY }}
          className=" w-[90%]
            md:max-w-[650px] p-4 absolute top-[600px]

            /* Mobile centered */
            left-1/2 -translate-x-1/2 text-start

            /* Desktop left align */
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
