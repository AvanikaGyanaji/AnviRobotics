// import React from "react";  
// import { useRef } from "react";
// import { motion,useScroll,useTransform } from "framer-motion";  



//  export const Products =()=>{
//      // 1. Create a ref for the outer "runway" container
//       const scrollRef = useRef(null);
    
//       // 2. Track scroll progress of the "runway"
//       const { scrollYProgress } = useScroll({
//         target: scrollRef,
//         offset: ["start start", "end end"], // Track from when its top hits the viewport top
//                                           // until its bottom hits the viewport bottom.
//       });
//       const heightHR = useTransform(
//         scrollYProgress,
//         [0.3,0.6,0.9],
//         [400,360,60]
//       )
    
//     return(
//         <>
//         <section id="products" className="flex flex-col overflow-hidden pt-[150px]">
           
//             <div className="text-white  flex flex-col justify-center items-center  px-[1 0px] ">
//                 <h1 className="text-[48px] text-center ">Our Products</h1>
//                 <p className="text-[28px]">From AI-powered surveillance to intelligent humanoids, Anvi Robotics delivers cutting-<br/>
//                 edge products designed for smarter, safer, and faster solutions.</p>
//             </div>

// <div ref={scrollRef} className="relative h-[300vh] w-full flex justify-center">

//             <div className="flex absolute top-0 justify-evenly gap-x-[20px] items-center z-[50] pb-[100px]">
               
//                  <motion.div style={{height:heightHR}}> <div className="bg-transparent relative h-[440px]">
//                     <img className="h-[360px]" src="/images/Humanoid.png"/>
//                     <div className="h-[440px] flex items-end justify-center absolute bottom-0  w-full bg-[#a0a0a016] text-[#FFFFFF] rounded-[16px] ">
//                         <p className="py-[10px] px-auto  bottom-0 text-center font-medium text-[22px] text-[#ffffff] ">Humanoid Robot</p>
//                     </div>
//                 </div>
//                 </motion.div>
//                   <div className="bg-transparent h-[400px]">
//                     <img className="h-[360px]" src="/images/Surveillance Robot.png"/>
//                     <div className="h-[60px] w-full bg-[#a0a0a016] text-[#FFFFFF] rounded-[16px] ">
//                         <p className="py-[10px] text-center font-medium text-[22px] text-[#ffffff] ">Surveillance Robot</p>
//                     </div>
//                 </div>

//                   <div className="bg-transparent h-[400px]">
//                     <img className="h-[360px]" src="/images/Semi-Humanoid.png"/>
//                     <div className="h-[60px]  w-full bg-[#a0a0a016] text-[#FFFFFF] rounded-[16px] ">
//                         <p className="py-[10px] text-center font-medium text-[22px] text-[#ffffff] ">Semi-Humanoid Robot</p>
//                     </div>
//                 </div>

//             </div>
//                     </div>


//         </section>
//         </>
//     )
//  }
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const Products = () => {
  const scrollRef = useRef(null);

  // We track the scroll progress of the 300vh "runway"
  // from when its top hits the top, to when its bottom hits the bottom.
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"], 
  });

  // --- 1. Robot Animations (Sequential) ---
  // We divide the scroll progress (0 to 1) into "chapters"
  
  // Robot 1: Appears first [0% to 15% scroll]
  const robot1Opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const robot1Y = useTransform(scrollYProgress, [0, 0.15], [100, 0]); // Slide up

  // Robot 2: Appears second [20% to 35% scroll]
  const robot2Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const robot2Y = useTransform(scrollYProgress, [0.2, 0.35], [100, 0]); // Slide up

  // Robot 3: Appears third [40% to 55% scroll]
  const robot3Opacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const robot3Y = useTransform(scrollYProgress, [0.4, 0.55], [100, 0]); // Slide up

  // --- 2. Section Fade-Out ---
  // The WHOLE section fades out together at the end [75% to 90% scroll]
  const allContentOpacity = useTransform(
    scrollYProgress,
    [0.75, 1],
    [1, 1]
  );
  
  // Optional: Spring smoothing for a better feel
  const smoothRobot1Y = useSpring(robot1Y, { stiffness: 100, damping: 20 });
  const smoothRobot2Y = useSpring(robot2Y, { stiffness: 100, damping: 20 });
  const smoothRobot3Y = useSpring(robot3Y, { stiffness: 100, damping: 20 });


  return (
    <>
      {/* 300vh "runway" to provide scroll height */}
      <div ref={scrollRef} className="relative h-[300vh] w-full">
        
        {/* Sticky container that fills the screen */}
        <section
          id="products"
          className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        >
          {/* This motion.div wraps ALL content and fades it out at the end */}
          <motion.div
            style={{ opacity: allContentOpacity }} // <-- This fades everything out
            className="flex flex-col justify-center h-full"
          >
            
            {/* --- Text Content (NOT ANIMATED) --- */}
            {/* This text is visible from the start, exactly like the video */}
            <div className="text-white flex flex-col justify-center items-center px-[10px] mb-12">
              <h1 className="text-[48px] text-center ">Our Products</h1>
              <p className="text-[28px] text-center ">
                From AI-powered surveillance to intelligent humanoids, Anvi
                Robotics delivers cutting-
                <br />
                edge products designed for smarter, safer, and faster solutions.
              </p>
            </div>

            {/* --- Robot Content --- */}
            <div className="flex justify-evenly items-center z-[500]  w-full max-w-7xl mx-auto">
              
              {/* Robot 1 */}
              <motion.div
                style={{ opacity: robot1Opacity, y: smoothRobot1Y }} // <-- Robot 1 animation
                className="bg-transparent h-[400px]"
              >
                <img
                  className="h-[360px]"
                  src="/images/Humanoid.png"
                  alt="Humanoid Robot"
                />
                <div className="h-[60px] w-full bg-[#a0a0a016] text-[#FFFFFF] rounded-[16px]">
                  <p className="py-[10px] text-center font-medium text-[22px] text-[#ffffff]">
                    Humanoid Robot
                  </p>
                </div>
              </motion.div>

              {/* Robot 2 */}
              <motion.div
                style={{ opacity: robot2Opacity, y: smoothRobot2Y }} // <-- Robot 2 animation
                className="bg-transparent h-[400px]"
              >
                <img
                  className="h-[360px]"
                  src="/images/Surveillance Robot.png"
                  alt="Surveillance Robot"
                />
                <div className="h-[60px] w-full bg-[#a0a0a016] text-[#FFFFFF] rounded-[16px]">
                  <p className="py-[10px] text-center font-medium text-[22px] text-[#ffffff]">
                    Surveillance Robot
                  </p>
                </div>
              </motion.div>

              {/* Robot 3 */}
              <motion.div
                style={{ opacity: robot3Opacity, y: smoothRobot3Y }} // <-- Robot 3 animation
                className="bg-transparent h-[400px]"
              >
                <img
                  className="h-[360px]"
                  src="/images/Semi-Humanoid.png"
                  alt="Semi-Humanoid Robot"
                />
                <div className="h-[60px] w-full bg-[#a0a0a016] text-[#FFFFFF] rounded-[16px]">
                  <p className="py-[10px] text-center font-medium text-[22px] text-[#ffffff]">
                    Semi-Humanoid Robot
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};