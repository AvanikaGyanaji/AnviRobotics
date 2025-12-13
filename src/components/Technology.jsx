import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const Technology = () => {
  const scrollRef = useRef(null);

  // Detect Mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // One scrollYProgress for both desktop & mobile
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // 🔥 SEND HEADER THEME EVENTS BASED ON SCROLL POSITION
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      // When the black container is covering the top area
      const blackBoxActive = v > 0.38 && v < 0.92;

      window.dispatchEvent(
        new CustomEvent("header-theme-change", {
          detail: { dark: blackBoxActive }, // true = white text/logo
        })
      );
    });
  }, [scrollYProgress]);

  // Shared intro animations
  const videoRiseY = useTransform(
    scrollYProgress,
    [0.05, 0.09, 0.15, 0.25],
    ["0%", "0%", "-50%", "-100%"]
  );

  const topTextY = useTransform(scrollYProgress, [0.25, 0.35], ["0%","-200%" ]);

  const navY = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.59,0.70],
    ["320%", "0%", "0%", "-550%"]
  );
  const navOpacity = useTransform(scrollYProgress, [0.3, 0.45,0.7], [0, 1,0.2]);

  const dashY = useTransform(scrollYProgress, [0.6,0.68, 0.75], ["500%","120%", "-60%"]);
  const dashOpacity = useTransform(scrollYProgress, [0.65, 0.73,0.98], [1, 1,0]);

  // DESKTOP — keep original animations
  const backgroundHeight = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.45, 0.55, 0.65],
    ["100vh", "100vh", "95vh", "90vh", "80vh"]
  );
  const backgroundWidth = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.45, 0.65, 0.75],
    ["100%", "100%", "95%", "90%", "80%"]
  );
  const backgroundRadius = useTransform(
    scrollYProgress,
    [0.35, 0.55],
    [0, 32]
  );

  // MOBILE — only WIDTH + RADIUS should animate
  const mobileWidth = useTransform(
    scrollYProgress,
    [0.4, 0.55, 0.65],
    ["100%", "97%", "95%"]
  );
  const mobileHeight = useTransform(
    scrollYProgress,
    [0.4, 0.55, 0.65],
    ["100%", "97%", "85%"]
  );
  const mobileRadius = useTransform(
    scrollYProgress,
    [0.45, 0.55],
    [0, 26]
  );

  // Label animations (desktop only)
  const l1 = useTransform(scrollYProgress, [0.34, 0.45, 0.55], ["500%", "-1200%", "-3400%"]);
  const l2 = useTransform(scrollYProgress, [0.34, 0.45, 0.55], ["500%", "-600%", "-3400%"]);
  const l3 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], ["500%", "-1200%", "-3400%"]);
  const l4 = useTransform(scrollYProgress, [0.45, 0.55, 0.65], ["500%", "-600%", "-2400%"]);
  const l5 = useTransform(scrollYProgress, [0.75, 0.81, 0.86], ["500%", "-890%", "-2400%"]);
  const l6 = useTransform(scrollYProgress, [0.75, 0.81, 0.86], ["500%", "-400%", "-2400%"]);
  const l7 = useTransform(scrollYProgress, [0.8, 0.85, 0.99], ["500%", "-800%", "-2250%"]);
  const l8 = useTransform(scrollYProgress, [0.8, 0.85, 0.99], ["500%", "-400%", "-2710%"]);
  const l9 = useTransform(scrollYProgress, [0.8, 0.85, 0.99], ["500%", "-200%", "-2400%"]);

  return (
    <section
      id="technology"
      ref={scrollRef}
      className="relative w-full h-[800vh] bg-[#eff0f0] light-bg-trigger"
    >
      <div className="sticky top-0 h-screen w-full flex justify-center items-center">

        {/* MAIN CONTAINER */}
        <motion.div
          style={
            isMobile
              ? {
                  height: mobileHeight,
                  width: mobileWidth,
                  borderRadius: mobileRadius,
                }
              : {
                  height: backgroundHeight,
                  width: backgroundWidth,
                  borderRadius: backgroundRadius,
                }
          }
          className="bg-black relative overflow-hidden"
        >

          {/* VIDEO */}
          <motion.div
            style={{ y: videoRiseY }}
            className="absolute top-full left-0 w-full h-full overflow-hidden"
          >
            <video
            style={{objectPosition:"70% 50%"}}
              className="w-full h-full object-cover "
              src="/anvirobotics.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          {/* OUR TECHNOLOGY */}
          <motion.div
            style={{ y: topTextY }}
            className="absolute top-[100px] w-full text-center text-white px-6"
          >
            <h2 className="about-heading text-[32px] md:text-[44px] font-bold">Our Technology</h2>
            <p className="text-[16px] md:text-[24px] mt-2 max-md:w-[90%] max-lg:w-[80%] lg:max-w-[70%] mx-auto ">
Blending AI, precision engineering, and automation we build robots that deliver unmatched power endurance, and intelligence.              </p>
          </motion.div>

          {/* AUTONAV */}
          <motion.div
            style={{ y: navY,  opacity: isMobile ? 1 : navOpacity, }}
            className={`absolute w-full text-white px-6 ${
              isMobile ? "left-0 top-[180px] text-left" : "left-1/2 top-1/2 text-center -translate-x-1/2"
            }`}
          >
            <h2 className=" mb-3 technology-heading max-md:text-[24px] font-black">Autonomous Navigation</h2>
            <p>How it Works</p>

            {isMobile && (
              <div className="space-y-3 text-[16px]">
                <Label text="• LiDAR And Sensor Fusion" />
                <Label text="• SLAM Mapping" />
                <Label text="• AI-Driven Pathfinding" />
                <Label text="• Dynamic Obstacle Avoidance" />
              </div>
            )}
          </motion.div>

          {/* DESKTOP LABELS */}
          {!isMobile && (
            <>
              <motion.h1 style={{ y: l1 }} className="absolute left-[15%] bottom-[-80px] label w-auto md:w-[200px]  flex"><span className="mr-[10px] text-2xl">•</span> LiDAR And Sensor Fusion</motion.h1>
              <motion.h1 style={{ y: l2 }} className="absolute right-[15%] bottom-[-80px] label w-auto md:w-[250px]  flex"><span className="mr-[10px] text-2xl">•</span> SLAM (Simultaneous Localization and Mapping)</motion.h1>
              <motion.h1 style={{ y: l3 }} className="absolute left-[15%] bottom-[-80px] label w-auto md:w-[200px]  flex items-center"><span className="mr-[10px] text-2xl">•</span> AI-Driven Pathfinding</motion.h1>
              <motion.h1 style={{ y: l4 }} className="absolute right-[15%] bottom-[-80px] label w-auto md:w-[200px]  flex"><span className="mr-[10px] text-2xl">•</span> Dynamic Obstacle Avoidance</motion.h1>
            </>
          )}

          {/* DASHBOARD */}
          <motion.div
            style={{ y: dashY, opacity: dashOpacity }}
            className={`absolute w-full text-white px-6 ${
              isMobile ? "left-0 top-[380px] text-left" : "left-1/2 top-1/2 text-center -translate-x-1/2"
            }`}
          >
            <h2 className="technology-heading font-black ">The Control Dashboard</h2>
            <p>Innovation</p>

            {isMobile && (
              <div className="text-[16px]">
                <Label text="• Real-Time Fleet Oversight" />
                <Label text="• Actionable Insights & Alerts" />
                <Label text="• Intuitive Control & Customization" />
                <Label text="• Data & Analytics" />
                <Label text="• Customization" />
              </div>
            )}
          </motion.div>

          {/* DESKTOP LABELS */}
          {!isMobile && (
            <>
              <motion.h1 style={{ y: l5 }} className="absolute left-[15%] bottom-[-80px] label w-auto md:w-[150px] flex "><span className="mr-[10px] text-2xl">•</span> Real-Time Fleet Oversight</motion.h1>
              <motion.h1 style={{ y: l6 }} className="absolute right-[15%] bottom-[-80px] label w-auto md:w-[200px]  flex"><span className="mr-[10px] text-2xl">•</span> Actionable Insights & Alerts</motion.h1>
              <motion.h1 style={{ y: l7 }} className="absolute left-[15%] bottom-[-80px] label w-auto md:w-[200px] flex "><span className="mr-[10px] text-2xl">•</span> Intuitive Control & Customization</motion.h1>
              <motion.h1 style={{ y: l8 }} className="absolute right-[15%] bottom-[-80px] label flex items-center"><span className="mr-[10px] text-2xl">•</span> Data & Analytics</motion.h1>
              <motion.h1 style={{ y: l9 }} className="absolute left-[40%] bottom-[-80px] label flex items-center"><span className="mr-[10px] text-2xl">•</span> Customization</motion.h1>
            </>
          )}

        </motion.div>
      </div>
    </section>
  );
};

// Label component
const Label = ({ text }) => (
  <div className="bg-white text-black px-4 py-2 mt-[20px] rounded-md text-[14px] shadow-sm">
    {text}
  </div>
);
