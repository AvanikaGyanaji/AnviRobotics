
// import React, {  useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export const Technology = () => {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"],
//   });

//   // ─────────────────────────────────────────────
//   // TOP TEXT CONTAINER ANIMATION
//   const topTextOpacity = useTransform(scrollYProgress, [0.09, 0.1], [0.2, 1]);
//   const topTextY = useTransform(scrollYProgress, [0.3, 0.4], [0, -300]);

//   // ─────────────────────────────────────────────
//   // BACKGROUND VIDEO ANIMATION
//   const videoOpacity = useTransform(scrollYProgress, [0.01, 0.2, 0.3], [0, 0, 1]);
//   const videoScale = useTransform(scrollYProgress, [0.01, 0.3], [0.8, 1]);
//   const backgroundHeight = useTransform(scrollYProgress,[0.38,0.45,0.55,0.6,0.75,0.76,0.78,0.84,0.85],["75vh","85vh","75vh","60vh","65vh","85vh","75vh","75vh","65vh"])
//   const backgroundWIdth = useTransform(scrollYProgress,[0.55,0.6,0.68],["100%","90%","80%"])
  

//   // ─────────────────────────────────────────────
//   // CENTER DIV ANIMATION
//   const divUP = useTransform(scrollYProgress, [0.28, 0.42], ["500%", "-80%"]);
//   const divOpacity = useTransform(scrollYProgress, [0.28, 0.42], [0, 1]);

//   const controlDiv = useTransform(scrollYProgress,[0.7,0.72,0.74],[500,-50,-100]);
//   const controlDivOpacity = useTransform(scrollYProgress,[0.68,0.72,0.75],[0.5,1,1]);
//   const items = useTransform(scrollYProgress,[0.72,0.74],["-250%","0%"]);
//   const size = useTransform(scrollYProgress,[0.76,0.78,0.82],[44,33,33])
//   const bordercolor = useTransform(scrollYProgress,[0.84,0.88],["#000000","#ffffff"])
//   // LABLES ANIMATION
//   const lable1 = useTransform(scrollYProgress,[0.48,0.55,0.6],["500%","-1200%","-3400%"])
//   const lablescale= useTransform(scrollYProgress,[0.48,0.55,0.6],[0.5,1,0.5])
//   const lable2 = useTransform(scrollYProgress,[0.48,0.55,0.6],["500%","-600%","-3400%"])
//   const lable3 = useTransform(scrollYProgress,[0.55,0.62,0.68],["500%","-1200%","-3400%"])
//   const lablescale2= useTransform(scrollYProgress,[0.55,0.62,0.68],[0.5,1,0.5])
//   const lable4 = useTransform(scrollYProgress,[0.55,0.62,0.68],["500%","-600%","-2400%"])
//   const lable5 = useTransform(scrollYProgress,[0.74,0.76,0.78],["500%","-890%","-2400%"])
//   const lable6 = useTransform(scrollYProgress,[0.74,0.76,0.78],["500%","-400%","-2400%"])
//   const lable7 = useTransform(scrollYProgress,[0.76,0.78,0.82],["500%","-300%","-950%"])
//   const lable8 = useTransform(scrollYProgress,[0.76,0.78,0.82],["500%","-400%","-710%"])
//   const lable9 = useTransform(scrollYProgress,[0.78,0.84,0.88],["500%","-200%","-300%"])


  


//   return (
//     <section
//       id="technology"
//       ref={scrollRef}
//       className="relative w-full h-[1500vh]"
//     >
//       <div className="sticky top-[120px] flex justify-center">
//         <motion.div style={{height:backgroundHeight, width:backgroundWIdth}} className="w-full rounded-[32px]  relative overflow-hidden">

//           {/* BACKGROUND VIDEO */}
//           <motion.div
//             style={{ opacity: videoOpacity, scale: videoScale }}
//             className="absolute inset-0"
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

//           {/* TOP TEXT CONTAINER */}
//           <motion.div
//             style={{
//               opacity: topTextOpacity,
//               y: topTextY,
//             }}
//             className="absolute top-[100px] w-full text-center z-20"
//           >
//             <h1 className="text-[44px] text-white font-bold">
//               Our Technology
//             </h1>

//             <p className="text-[24px] text-white mt-2">
//               Blending AI, precision engineering, and automation we build robots
//               that deliver <br />
//               unmatched power endurance, and intelligence.
//             </p>
//           </motion.div>

//         {/* CENTER TEXT — Autonomous Navigation */}
// <motion.div
//   style={{
//     // Start completely below, end perfectly centered
//     y: divUP,
//     opacity: divOpacity,
//   }}
//   className="absolute left-1/2 top-1/2 w-full text-center"
// >
//   <div className="transform -translate-x-1/2">
//     <h1 className="text-[44px] font-bold text-white">
//       Autonomous Navigation
//     </h1>

//     <p className="text-[24px] text-white mt-2">
//       How it works
//     </p>
//   </div>
// </motion.div>

// <motion.h1
//   style={{ y: lable1 ,scale:lablescale}}
//   className="absolute left-[15%] bottom-[-80px]  transform -translate-x-1/2
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • LiDAR And Sensor Fusion
// </motion.h1>

// <motion.h1
//   style={{ y: lable2 , scale:lablescale }}
//   className="absolute right-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • SLAM (Simultaneous Localization and Mapping)
// </motion.h1>

// <motion.h1
//   style={{ y: lable3 , scale:lablescale2 }}
//   className="absolute left-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • AI-Driven Pathfinding
// </motion.h1>
// <motion.h1
//   style={{ y: lable4 , scale:lablescale2 }}
//   className="absolute right-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • Dynamic Obstacle Avoidance
// </motion.h1>
// <motion.div style={{y:controlDiv, display:"flex",flexDirection:"column",opacity:controlDivOpacity, border:bordercolor}} className="absolute bottom-[-100px] w-full max-h-[80vh] h-full bg-black rounded-[32px] flex justify-center items-center">
// <motion.div style={{y:items}}>
//   <motion.h1 style={{fontSize:size}} className="text-[44px] text-white">The Control Dashboard</motion.h1>
//   <motion.p className="text-[24px] text-white text-center">Innovations</motion.p>
// </motion.div>
// </motion.div>
// <motion.h1
//   style={{ y: lable5  }}
//   className="absolute left-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • Real-Time Fleet Oversight
// </motion.h1>
// <motion.h1
//   style={{ y: lable6  }}
//   className="absolute right-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • Actionable Insights & Alerts
// </motion.h1>
// <motion.h1
//   style={{ y: lable7  }}
//   className="absolute left-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • Intuitive Control & Customization
// </motion.h1>
// <motion.h1
//   style={{ y: lable8  }}
//   className="absolute right-[5%] bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • 	Data & Analytics
// </motion.h1>
// <motion.h1
//   style={{ y: lable9 , }}
//   className="absolute left-[40%] text-center bottom-[-80px]  
//              bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md"
// >
//   • Customization
// </motion.h1>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Technology = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // ─────────────────────────────────────────────
  // TOP TEXT CONTAINER ANIMATION
  const topTextOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0.2, 1]);
  const topTextY = useTransform(scrollYProgress, [0.20, 0.35], [0, -300]);

  // ─────────────────────────────────────────────
  // BACKGROUND VIDEO ANIMATION
  const videoOpacity = useTransform(scrollYProgress, [0.02, 0.18, 0.32], [0, 0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.02, 0.32], [0.8, 1]);

  const backgroundHeight = useTransform(
    scrollYProgress,
    [0.30, 0.40, 0.50, 0.60, 0.70, 0.75, 0.80, 0.87, 0.92],
    ["75vh","85vh","75vh","60vh","65vh","85vh","75vh","75vh","65vh"]
  );

  const backgroundWIdth = useTransform(
    scrollYProgress,
    [0.50, 0.60, 0.70],
    ["100%", "90%", "80%"]
  );

  // ─────────────────────────────────────────────
  // CENTER DIV ANIMATION
  const divUP = useTransform(scrollYProgress, [0.22, 0.40], ["500%", "-80%"]);
  const divOpacity = useTransform(scrollYProgress, [0.22, 0.40], [0, 1]);

  const controlDiv = useTransform(scrollYProgress, [0.63, 0.70, 0.77], [500, -50, -140]);
  const controlDivOpacity = useTransform(scrollYProgress, [0.60, 0.70, 0.78], [0.5, 1, 1]);
  const items = useTransform(scrollYProgress, [0.70, 0.78], ["-180%", "0%"]);
  const size = useTransform(scrollYProgress, [0.74, 0.80, 0.86], [44, 33, 33]);
  const bordercolor = useTransform(scrollYProgress, [0.78, 0.90], ["#000000", "#ffffff"]);

  // ─────────────────────────────────────────────
  // LABELS ANIMATION (SMOOTH RANGES)
  const lable1 = useTransform(scrollYProgress, [0.38, 0.48, 0.58], ["500%", "-1200%", "-3400%"]);
  const lablescale = useTransform(scrollYProgress, [0.38, 0.48, 0.58], [0.5, 1, 0.5]);

  const lable2 = useTransform(scrollYProgress, [0.38, 0.48, 0.58], ["500%", "-600%", "-3400%"]);

  const lable3 = useTransform(scrollYProgress, [0.48, 0.58, 0.68], ["500%", "-1200%", "-3400%"]);
  const lablescale2 = useTransform(scrollYProgress, [0.48, 0.58, 0.68], [0.5, 1, 0.5]);

  const lable4 = useTransform(scrollYProgress, [0.48, 0.58, 0.68], ["500%", "-600%", "-2400%"]);

  const lable5 = useTransform(scrollYProgress, [0.65, 0.72, 0.78], ["500%", "-890%", "-2400%"]);
  const lable6 = useTransform(scrollYProgress, [0.65, 0.72, 0.78], ["500%", "-400%", "-2400%"]);

  const lable7 = useTransform(scrollYProgress, [0.72, 0.80, 0.88], ["500%", "-300%", "-950%"]);
  const lable8 = useTransform(scrollYProgress, [0.72, 0.80, 0.88], ["500%", "-400%", "-710%"]);
  const lable9 = useTransform(scrollYProgress, [0.80, 0.88, 0.95], ["500%", "-200%", "-300%"]);

  return (
    <section id="technology" ref={scrollRef} className="relative w-full h-[1000vh]">
      <div className="sticky top-[120px] flex justify-center">

        <motion.div style={{ height: backgroundHeight, width: backgroundWIdth }} className="w-full rounded-[32px] relative overflow-hidden">

          {/* BACKGROUND VIDEO */}
          <motion.div style={{ opacity: videoOpacity, scale: videoScale }} className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src="/anvirobotics.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </motion.div>

          {/* TOP TEXT CONTAINER */}
          <motion.div
            style={{ opacity: topTextOpacity, y: topTextY }}
            className="absolute top-[100px] w-full text-center z-20"
          >
            <h1 className="text-[44px] text-white font-bold">Our Technology</h1>
            <p className="text-[24px] text-white mt-2">
              Blending AI, precision engineering, and automation we build robots that deliver <br />
              unmatched power endurance, and intelligence.
            </p>
          </motion.div>

          {/* CENTER TEXT — Autonomous Navigation */}
          <motion.div
            style={{ y: divUP, opacity: divOpacity }}
            className="absolute left-1/2 top-1/2 w-full text-center"
          >
            <div className="transform -translate-x-1/2">
              <h1 className="text-[44px] font-bold text-white">Autonomous Navigation</h1>
              <p className="text-[24px] text-white mt-2">How it works</p>
            </div>
          </motion.div>

          {/* LABELS */}
          <motion.h1 style={{ y: lable1, scale: lablescale }} className="absolute left-[15%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• LiDAR And Sensor Fusion</motion.h1>

          <motion.h1 style={{ y: lable2, scale: lablescale }} className="absolute right-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• SLAM (Simultaneous Localization and Mapping)</motion.h1>

          <motion.h1 style={{ y: lable3, scale: lablescale2 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• AI-Driven Pathfinding</motion.h1>

          <motion.h1 style={{ y: lable4, scale: lablescale2 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• Dynamic Obstacle Avoidance</motion.h1>

          {/* CONTROL DASHBOARD */}
          <motion.div
            style={{ y: controlDiv, opacity: controlDivOpacity, border: bordercolor }}
            className="absolute bottom-[-150px] w-full max-h-[80vh] h-full bg-black rounded-[32px] flex justify-center items-center"
          >
            <motion.div style={{ y: items }}>
              <motion.h1 style={{ fontSize: size }} className="text-[44px] text-white">The Control Dashboard</motion.h1>
              <motion.p className="text-[24px] text-white text-center">Innovations</motion.p>
            </motion.div>
          </motion.div>

          {/* MORE LABELS */}
          <motion.h1 style={{ y: lable5 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• Real-Time Fleet Oversight</motion.h1>
          <motion.h1 style={{ y: lable6 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• Actionable Insights & Alerts</motion.h1>
          <motion.h1 style={{ y: lable7 }} className="absolute left-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• Intuitive Control & Customization</motion.h1>
          <motion.h1 style={{ y: lable8 }} className="absolute right-[5%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• Data & Analytics</motion.h1>
          <motion.h1 style={{ y: lable9 }} className="absolute left-[40%] bottom-[-80px] bg-white text-black text-[20px] font-semibold px-4 py-2 rounded-md">• Customization</motion.h1>

        </motion.div>
      </div>
    </section>
  );
};
