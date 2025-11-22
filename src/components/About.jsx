import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const About = () => {
  // `scrollRef` must point to the *outer runway* (the tall element),
  // not the sticky child. Framer's useScroll will then give progress
  // as the runway travels through the viewport.
  const scrollRef = useRef(null);
  console.log("ScrollREf in About: ", scrollRef);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const aboutOpacity = useTransform(scrollYProgress, [0,0.2, 0.35, 0.45], [0,0.2, 1, 0.2]);
  const visionOpacity = useTransform(scrollYProgress, [0.26, 0.35, 0.55, 0.85], [0, 0.2, 1, 0.2]);
  // const visionOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.85], [0, 0.2, 1, 0.2]);
  const missionOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.85, 0.9], [0, 0.1, 1, 1]);

  const aboutY = useTransform(scrollYProgress, [0.1, 0.55, 0.7], [0, 0, -600]);
  const visionY = useTransform(scrollYProgress, [0.1, 0.55, 0.7], [0, 0, -800]);
  const missionY = useTransform(scrollYProgress, [0.55, 0.55, 0.75], [100, 0, -450]);

  useEffect(() => {
    console.log("ScrollRef ============= : ", scrollRef.current);
  }, [scrollRef]);

  return (
    // OUTER RUNWAY: tall element that provides scroll height
    <section id="about" ref={scrollRef} className="relative w-full h-[300vh]">
      {/* STICKY VIEWPORT: this child is the 100vh view that stays in place */}
      <div className="sticky top-0 h-screen w-full overflow-hidden text-white">
        {/* ABOUT US */}
        <motion.div
          style={{ opacity: aboutOpacity, y: aboutY }}
          className="max-w-[625px] p-4 absolute top-[120px] left-[5%]"
        >
          <h1 className=" mb-[24px] about-heading">About Us</h1>
          <p className=" about-content">
            Excellence at Every Step. We blend advanced <br />
            engineering with real-world application to deliver <br />
            reliable, scalable robotics that perform seamlessly fast, <br />
            precise, and trustworthy.
          </p>
        </motion.div>

        {/* OUR VISION */}
        <motion.div
          style={{ opacity: visionOpacity, y: visionY }}
          className="max-w-[625px] p-4 absolute top-[380px] right-[5%]"
        >
          <h1 className=" mb-[24px] about-heading">Our Vision</h1>
          <p className=" about-content">
            Pioneering change and powering possibilities we’re <br />
            shaping a future where robotics empowers people, <br />
            transforming industries with smarter, safer innovation.
          </p>
        </motion.div>

        {/* OUR MISSION */}
        <motion.div
          style={{ opacity: missionOpacity, y: missionY }}
          className="max-w-[625px] p-4 absolute top-[600px] left-[5%]"
        >
          <h1 className=" mb-[24px] about-heading">Our Mission</h1>
          <p className=" about-content">
            Driving a sustainable future through intelligent robotics
            <br />
            where innovation meets reliability, and engineering
            <br />
            transforms vision into impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
