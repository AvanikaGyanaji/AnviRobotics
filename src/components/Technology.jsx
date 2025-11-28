
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// export const Technology = () => {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"],
//   });

//   // ─────────────────────────────────────────────
//   // VIDEO — START LATE AFTER FULL SECTION IS VISIBLE
//   const videoRiseY = useTransform(
//     scrollYProgress,
//     [0.05,0.09, 0.15, 0.25],
//     ["0%", "0%","-50%", "-100%"]
//   );


//   // ─────────────────────────────────────────────
//   // TOP "OUR TECHNOLOGY" TEXT — ONLY AFTER VIDEO SETTLES
//   const topTextY = useTransform(scrollYProgress, [0.3, 0.4], [0, -300]);
  

//   // ─────────────────────────────────────────────
//   // AUTONOMOUS NAVIGATION TEXT — AFTER TOP TEXT GOES UP
//   const divUP = useTransform(scrollYProgress, [0.4, 0.55], ["200%", "-50%"]);
//   const divOpacity = useTransform(scrollYProgress, [0.4, 0.55,0.73], [0, 1,0]);

//    // AUTONOMOUS NAVIGATION TEXT — AFTER TOP TEXT GOES UP
//   const div1UP = useTransform(scrollYProgress, [0.7, 0.75], ["400%", "-50%"]);
//   const div1Opacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);
//   const div1scale = useTransform(scrollYProgress, [0.7, 0.75], [0.8, 1]);

//   // ─────────────────────────────────────────────
//   // BLACK CONTAINER RESIZE
//   const backgroundHeight = useTransform(
//     scrollYProgress,
//     [0.40, 0.55, 0.59, 0.65, 0.75],
//     ["100vh", "100vh", "95vh", "90vh", "80vh"]
//   );

//   const backgroundWIdth = useTransform(
//     scrollYProgress,
//     [0.40, 0.55, 0.59,0.65, 0.75],
//     ["100%", "100%", "95%","90%", "80%"]
//   );
//   const backgroundradius = useTransform(
//     scrollYProgress,
//     [0.54,0.55],[0,32]
//   );

//   // ─────────────────────────────────────────────
//   // REMAINING LABEL ANIMATIONS AND DASHBOARD AS-IS
//   // const controlDiv = useTransform(scrollYProgress, [0.75, 0.82, 0.90], [500, -50, -140]);
//   // const controlDivOpacity = useTransform(scrollYProgress, [0.75, 0.82, 0.90], [0, 1, 1]);
//   // const items = useTransform(scrollYProgress, [0.82, 0.88], ["-180%", "0%"]);
//   // const size = useTransform(scrollYProgress, [0.88, 0.94, 1], ["44px", "32px", "30px"]);
//   // const bordercolor = useTransform(scrollYProgress, [0.90, 1], ["#000", "#fff"]);

//   const lable1 = useTransform(scrollYProgress, [0.50, 0.60, 0.65], ["500%", "-1200%", "-3400%"]);
//   const lable2 = useTransform(scrollYProgress, [0.50, 0.60, 0.65], ["500%", "-600%", "-3400%"]);
//   const lable3 = useTransform(scrollYProgress, [0.55, 0.68, 0.73], ["500%", "-1200%", "-3400%"]);
//   const lable4 = useTransform(scrollYProgress, [0.55, 0.68, 0.73], ["500%", "-600%", "-2400%"]);

//   const lable5 = useTransform(scrollYProgress, [0.75, 0.79, 0.85], ["500%", "-890%", "-2400%"]);
//   const lable6 = useTransform(scrollYProgress, [0.75, 0.79, 0.85], ["500%", "-400%", "-2400%"]);
//   const lable7 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-800%", "-1250%"]);
//   const lable8 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-400%", "-710%"]);
//   const lable9 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-200%", "-400%"]);

//   return (
//     <section id="technology" ref={scrollRef} className="relative w-full h-[800vh] bg-[#eff0f0]">

//       {/* Sticky Fullscreen Container */}
//       <div className="sticky top-0 h-screen w-full flex justify-center items-center">

//         {/* Black Main Container */}
//         <motion.div
//           style={{ height: backgroundHeight, width: backgroundWIdth ,borderRadius:backgroundradius }}
//           className="bg-black relative overflow-hidden h-full w-full"
//         >

//           {/* VIDEO RISING FROM BOTTOM */}
//           <motion.div
//             style={{ y: videoRiseY }}
//             className="absolute left-0 top-full w-full h-full overflow-hidden z-[1]"
//           >
//             <video
//               className="w-full h-full object-cover"
//               src="/anvirobotics.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//             />
//           </motion.div>

//           {/* OUR TECHNOLOGY TEXT */}
//           <motion.div
//             style={{ y: topTextY }}
//             className="absolute top-[100px] w-full text-center z-[10]"
//           >
//             <h1 className="text-[44px] text-white font-bold">Our Technology</h1>
//             <p className="text-[24px] text-white mt-2 w-[80%] mx-auto">
//               Blending AI, precision engineering, and automation we build robots that deliver 
//               unmatched power endurance, and intelligence.
//             </p>
//           </motion.div>

//           {/* AUTONOMOUS NAVIGATION TEXT */}
//           <motion.div
//             style={{ y: divUP, opacity: divOpacity }}
//             className="absolute left-1/2 top-1/2 w-full text-center z-[10]"
//           >
//             <div className="-translate-x-1/2">
//               <h1 className="text-[44px] font-black text-white">Autonomous Navigation</h1>
//               <p className="text-[24px] text-white mt-2">How it works</p>
//             </div>
//           </motion.div>

//           {/* LABELS + DASHBOARD (No changes) */}
//           <motion.h1 style={{ y: lable1 }} className="absolute left-[15%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• LiDAR And Sensor Fusion</motion.h1>
//           <motion.h1 style={{ y: lable2 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• SLAM (Simultaneous Localization and Mapping)</motion.h1>

//           <motion.h1 style={{ y: lable3 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• AI-Driven Pathfinding</motion.h1>
//           <motion.h1 style={{ y: lable4 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Dynamic Obstacle Avoidance</motion.h1>

//            <motion.div
//             style={{ y: div1UP, opacity: div1Opacity }}
//             className="absolute left-1/2 top-1/2 w-full text-center z-[10]"
//           >
//             <div className="-translate-x-1/2">
//               <h1 className="text-[44px] font-black text-white">The Control Dashboard</h1>
//               <p className="text-[24px] text-white mt-2">Innovation</p>
//             </div>
//           </motion.div>

//           <motion.h1 style={{ y: lable5 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Real-Time Fleet Oversight</motion.h1>
//           <motion.h1 style={{ y: lable6 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Actionable Insights & Alerts</motion.h1>
//           <motion.h1 style={{ y: lable7 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Intuitive Control & Customization</motion.h1>
//           <motion.h1 style={{ y: lable8 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Data & Analytics</motion.h1>
//           <motion.h1 style={{ y: lable9 }} className="absolute left-[40%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Customization</motion.h1>
//         </motion.div>
//       </div>
//     </section>
//   );
// // };

// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef, useState, useEffect } from "react";

// export const Technology = () => {
//   const scrollRef = useRef(null);

//   // Detect Mobile
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const update = () => setIsMobile(window.innerWidth < 768);
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   // Always call hooks
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"],
//   });

//   // Shared animations (video + headings)
//   const videoRiseY = useTransform(scrollYProgress, [0.05, 0.09, 0.15, 0.25], ["0%", "0%", "-50%", "-100%"]);
//   const topTextY = useTransform(scrollYProgress, [0.3, 0.4], [0, -250]);
//   const navY = useTransform(scrollYProgress, [0.4, 0.55,0.65,0.7], ["120%", "0%","0%","-550%"]);
//   const navOpacity = useTransform(scrollYProgress, [0.42, 0.55,7], [0, 1,0]);

//   const dashY = useTransform(scrollYProgress, [0.63, 0.75], ["120%", "-50%"]);
//   const dashOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

//   // DESKTOP LABEL ANIMATIONS - untouched
//   const backgroundHeight = useTransform(scrollYProgress, [0.4, 0.55, 0.59, 0.65, 0.75], ["100vh", "100vh", "95vh", "90vh", "80vh"]);
//   const backgroundWidth = useTransform(scrollYProgress, [0.4, 0.55, 0.59, 0.65, 0.75], ["100%", "100%", "95%", "90%", "80%"]);
//   const backgroundRadius = useTransform(scrollYProgress, [0.54, 0.55], [0, 32]);

//   // MOBILE LABEL ANIMATIONS - modified for better effect
//   const backgroundHeight1 = useTransform(scrollYProgress, [0.4, 0.55, 0.59, 0.65, 0.75], ["100vh", "98vh", "97vh", "96vh", "95vh"]);
//   const backgroundWidth1 = useTransform(scrollYProgress, [0.4, 0.55, 0.59, 0.65, 0.75], ["100%", "99.5%", "99%", "99%", "99%"]);
//   const backgroundRadius2 = useTransform(scrollYProgress, [0.54, 0.55], [0, 32]);

//   const l1 = useTransform(scrollYProgress, [0.5, 0.6, 0.65], ["500%", "-1200%", "-3400%"]);
//   const l2 = useTransform(scrollYProgress, [0.5, 0.6, 0.65], ["500%", "-600%", "-3400%"]);
//   const l3 = useTransform(scrollYProgress, [0.55, 0.68, 0.73], ["500%", "-1200%", "-3400%"]);
//   const l4 = useTransform(scrollYProgress, [0.55, 0.68, 0.73], ["500%", "-600%", "-2400%"]);
//   const l5 = useTransform(scrollYProgress, [0.75, 0.79, 0.85], ["500%", "-890%", "-2400%"]);
//   const l6 = useTransform(scrollYProgress, [0.75, 0.79, 0.85], ["500%", "-400%", "-2400%"]);
//   const l7 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-800%", "-1250%"]);
//   const l8 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-400%", "-710%"]);
//   const l9 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-200%", "-400%"]);

//   // ─────────────────────────────────────────────
//   // MOBILE UI — FULL BLOCK SCROLL (correct behavior)
//   // ─────────────────────────────────────────────
// if (isMobile) {
//   return (
//     <section ref={scrollRef} className="relative w-full h-[800vh] bg-[#eff0f0]">
//       <div className="sticky top-0 h-screen w-full flex justify-center items-center">

//         {/* MOBILE — shrink width + corner radius only */}
//         <motion.div
//           style={{
//             height: "100%",          // full height
//             width: backgroundWidth,  // animate width
//             borderRadius: backgroundRadius, // animate corners
//           }}
//           className="bg-black relative overflow-hidden"
//         >

//           {/* VIDEO */}
//           <motion.div style={{ y: videoRiseY }} className="absolute top-full left-0 w-full h-full">
//             <video
//               className="w-full h-full object-cover"
//               src="/anvirobotics.mp4"
//               autoPlay loop muted playsInline
//             />
//           </motion.div>

//           {/* OUR TECHNOLOGY */}
//           <motion.div
//             style={{ y: topTextY }}
//             className="absolute top-[100px] w-full text-center text-white px-6"
//           >
//             <h1 className="text-[32px] font-bold">Our Technology</h1>
//             <p className="text-[16px] mt-2 opacity-85">
//               Blending AI and robotics to deliver powerful intelligence.
//             </p>
//           </motion.div>

//           {/* AUTONAV */}
//           <motion.div
//             style={{ y: navY, opacity: navOpacity }}
//             className="absolute left-0 top-[180px] w-full text-white px-6"
//           >
//             <h2 className="text-[26px] font-bold mb-3">Autonomous Navigation</h2>

//             <div className="space-y-3 text-[16px]">
//               <Label text="• LiDAR And Sensor Fusion" />
//               <Label text="• SLAM Mapping" />
//               <Label text="• AI-Driven Pathfinding" />
//               <Label text="• Dynamic Obstacle Avoidance" />
//             </div>
//           </motion.div>

//           {/* DASHBOARD */}
//           <motion.div
//             style={{ y: dashY, opacity: dashOpacity }}
//             className="absolute left-0 top-[380px] w-full text-white px-6"
//           >
//             <h2 className="text-[26px] font-bold mb-3">The Control Dashboard</h2>

//             <div className="flex flex-col gap-y-3 text-[16px]">
//               <Label text="• Real-Time Fleet Oversight" />
//               <Label text="• Actionable Insights & Alerts" />
//               <Label text="• Intuitive Control & Customization" />
//               <Label text="• Data & Analytics" />
//               <Label text="• Customization" />
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }


//   // ─────────────────────────────────────────────
//   // DESKTOP (UNTOUCHED ORIGINAL)
//   // ─────────────────────────────────────────────
//   return (
//     <section id="technology" ref={scrollRef} className="relative w-full h-[800vh] bg-[#eff0f0]">
//       <div className="sticky top-0 h-screen w-full flex justify-center items-center">
//       <motion.div
//   style={
//     isMobile
//       ? { 
//           height: backgroundHeight1,          // mobile = full height
//           width: backgroundWidth1,  // mobile = shrink width
//           borderRadius: backgroundRadius2 // mobile = animate corner radius
//         }
//       : { 
//           height: backgroundHeight, 
//           width: backgroundWidth, 
//           borderRadius: backgroundRadius 
//         }
//   }
//   className="bg-black relative overflow-hidden"
// >


//           {/* VIDEO */}
//           <motion.div style={{ y: videoRiseY }} className="absolute left-0 top-full w-full h-full overflow-hidden z-[1]">
//             <video className="w-full h-full object-cover" src="/anvirobotics.mp4" autoPlay loop muted playsInline />
//           </motion.div>

//           {/* OUR TECHNOLOGY */}
//           <motion.div style={{ y: topTextY }} className="absolute top-[100px] w-full text-center z-[10]">
//             <h1 className="text-[44px] text-white font-bold">Our Technology</h1>
//             <p className="text-[24px] text-white mt-2 w-[80%] mx-auto">
//               Blending AI, precision engineering, and robotics for unmatched power and intelligence.
//             </p>
//           </motion.div>

//           {/* AUTONAV */}
//           <motion.div style={{ y: navY, opacity: navOpacity }} className="absolute left-1/2 top-1/2 w-full text-center z-[10]">
//             <div className="-translate-x-1/2">
//               <h1 className="text-[44px] font-black text-white">Autonomous Navigation</h1>
//               <p className="text-[24px] text-white mt-2">How it works</p>
//             </div>
//           </motion.div>

//           {/* LABELS */}
//           <motion.h1 style={{ y: l1 }} className="absolute left-[15%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• LiDAR And Sensor Fusion</motion.h1>
//           <motion.h1 style={{ y: l2 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• SLAM (Simultaneous Localization and Mapping)</motion.h1>
//           <motion.h1 style={{ y: l3 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• AI-Driven Pathfinding</motion.h1>
//           <motion.h1 style={{ y: l4 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Dynamic Obstacle Avoidance</motion.h1>

//           {/* CONTROL DASH */}
//           <motion.div style={{ y: dashY, opacity: dashOpacity }} className="absolute left-1/2 top-1/2 w-full text-center z-[10]">
//             <div className="-translate-x-1/2">
//               <h1 className="text-[44px] font-black text-white">The Control Dashboard</h1>
//               <p className="text-[24px] text-white mt-2">Innovation</p>
//             </div>
//           </motion.div>

//           <motion.h1 style={{ y: l5 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Real-Time Fleet Oversight</motion.h1>
//           <motion.h1 style={{ y: l6 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Actionable Insights & Alerts</motion.h1>
//           <motion.h1 style={{ y: l7 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Intuitive Control & Customization</motion.h1>
//           <motion.h1 style={{ y: l8 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Data & Analytics</motion.h1>
//           <motion.h1 style={{ y: l9 }} className="absolute left-[40%] bottom-[-80px] bg-white text-black px-4 py-2 rounded-md z-[20]">• Customization</motion.h1>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Label = ({ text }) => (
//   <div  className="bg-white  text-black px-4 py-2 mb-[10px] rounded-md text-[14px] shadow-sm">
//     {text}
//   </div>
// );
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

  const topTextY = useTransform(scrollYProgress, [0.25, 0.35], [0, -250]);

  const navY = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.65,0.75],
    ["320%", "0%", "0%", "-550%"]
  );
  const navOpacity = useTransform(scrollYProgress, [0.3, 0.45,0.7], [0, 1,0.2]);

  const dashY = useTransform(scrollYProgress, [0.65,0.75, 0.8], ["500%","120%", "-60%"]);
  const dashOpacity = useTransform(scrollYProgress, [0.65, 0.85,0.98], [1, 1,0]);

  // DESKTOP — keep original animations
  const backgroundHeight = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.49, 0.55, 0.65],
    ["100vh", "100vh", "95vh", "90vh", "80vh"]
  );
  const backgroundWidth = useTransform(
    scrollYProgress,
    [0.3, 0.45, 0.49, 0.65, 0.75],
    ["100%", "100%", "95%", "90%", "80%"]
  );
  const backgroundRadius = useTransform(
    scrollYProgress,
    [0.4, 0.55],
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
  const l5 = useTransform(scrollYProgress, [0.75, 0.79, 0.85], ["500%", "-890%", "-2400%"]);
  const l6 = useTransform(scrollYProgress, [0.75, 0.79, 0.85], ["500%", "-400%", "-2400%"]);
  const l7 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-800%", "-1250%"]);
  const l8 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-400%", "-710%"]);
  const l9 = useTransform(scrollYProgress, [0.8, 0.85, 0.9], ["500%", "-200%", "-400%"]);

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
              <motion.h1 style={{ y: l1 }} className="absolute left-[15%] bottom-[-80px] label">• LiDAR And Sensor Fusion</motion.h1>
              <motion.h1 style={{ y: l2 }} className="absolute right-[15%] bottom-[-80px] label">• SLAM (Simultaneous Localization and Mapping)</motion.h1>
              <motion.h1 style={{ y: l3 }} className="absolute left-[15%] bottom-[-80px] label">• AI-Driven Pathfinding</motion.h1>
              <motion.h1 style={{ y: l4 }} className="absolute right-[15%] bottom-[-80px] label">• Dynamic Obstacle Avoidance</motion.h1>
            </>
          )}

          {/* DASHBOARD */}
          <motion.div
            style={{ y: dashY, opacity: dashOpacity }}
            className={`absolute w-full text-white px-6 ${
              isMobile ? "left-0 top-[380px] text-left" : "left-1/2 top-1/2 text-center -translate-x-1/2"
            }`}
          >
            <h2 className="technology-heading font-black mb-3">The Control Dashboard</h2>
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
              <motion.h1 style={{ y: l5 }} className="absolute left-[15%] bottom-[-80px] label">• Real-Time Fleet Oversight</motion.h1>
              <motion.h1 style={{ y: l6 }} className="absolute right-[15%] bottom-[-80px] label">• Actionable Insights & Alerts</motion.h1>
              <motion.h1 style={{ y: l7 }} className="absolute left-[15%] bottom-[-80px] label">• Intuitive Control & Customization</motion.h1>
              <motion.h1 style={{ y: l8 }} className="absolute right-[15%] bottom-[-80px] label">• Data & Analytics</motion.h1>
              <motion.h1 style={{ y: l9 }} className="absolute left-[40%] bottom-[-80px] label">• Customization</motion.h1>
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
