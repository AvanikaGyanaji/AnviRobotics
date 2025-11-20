// import React, { useRef } from "react";
// // Import Framer Motion
// import { motion, useScroll, useTransform } from "framer-motion";
// // import { Products } from "./Products";

// export const About = () => {
//   // 1. Create a ref for the outer "runway" container
//   const scrollRef = useRef(null);

//   // 2. Track scroll progress of the "runway"
//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start start", "end end"], // Track from when its top hits the viewport top
//                                       // until its bottom hits the viewport bottom.
//   });

//   // --- Opacity Animations ---
//   // These are the same as before, but now they are powered by
//   // the scroll progress of the "runway" div.

//   // "About Us" fades out
//   const aboutOpacity = useTransform(
//     scrollYProgress,
//     [0, 0.35,0.45], // As we scroll from 10% to 25%...
//     [0.2, 1,0.2] // ...fade from 1 to 0
//   );

//   // "Our Vision" fades in, then out
//   const visionOpacity = useTransform(
//     scrollYProgress,
//     [ 0.2,0.35,0.55, 0.85], // Fade in (30%-45%), then fade out (45%-60%)
//     [0,0.2, 1, 0.2]
//   );

//   // "Our Mission" fades in
//   const missionOpacity = useTransform(
//     scrollYProgress,
//     [0.25, 0.65,0.85,1], // As we scroll from 65% to 80%...
//     [0, 0.2,1,1] // ...fade from 0 to 1
//   );
//   const aboutY = useTransform(
//     scrollYProgress,
//     [0.1,0.55,.7],
//     [0,0,-600]
//   )
//   const visionY = useTransform(
//     scrollYProgress,
//     [0.1,0.55,.7],
//     [0,0,-800]
//   )
//   const missionY = useTransform(
//     scrollYProgress,
//     [0.55,0.55,0.75],
//     [100,0,-450,]
//   )
//   // const productsOpacity =useTransform(
//   //   scrollYProgress,
//   //   [0.85,0.99],
//   //   [0.01,0.05]
//   // )
//   // const productsY =useTransform(
//   //   scrollYProgress,
//   //   [0,0.85,1],
//   //   [0,0,-50]
//   // )
//   return (
//     // 1. THE "RUNWAY"
//     // This outer div provides the scrollable height.
//     // We attach our ref to it.
//     <div ref={scrollRef} className="relative h-[500vh] w-full flex justify-center">
//       {/* 2. YOUR STICKY SECTION */}
//       {/* This is your actual 100vh section. It "sticks" to the top
//           while the parent div scrolls underneath it. */}   
//       <section
//         id="about"
//         data-theme="dark"
//         className="about-section text-white relative h-[screen] w-full overflow-hidden
//                    sticky top-0" // <-- This is the key!
//       >
//         {/* All content is inside the sticky section.
//             We use `absolute` to stack them on top of each other. */}

//         {/* "About Us" Block */}
//        <div className="relative">
//         <motion.div
//           style={{ opacity: aboutOpacity ,y:aboutY}} // Apply the animated opacity
//           className="max-w-[625px] p-[4px] absolute top-[120px] left-[5%]"
//         >
//           <h1 className="text-[48px] mb-[24px]">About Us</h1>
//           <p className="text-[24px]">
//             Excellence at Every Step. We blend advanced <br />
//             engineering with real-world application to deliver <br />
//             reliable, scalable robotics that perform seamlessly fast, <br />
//             precise, and trustworthy.
//           </p>
//         </motion.div>

//         {/* "Our Vision" Block */}
//         <motion.div
//           style={{ opacity: visionOpacity , y:visionY }} // Apply the animated opacity
//           className="max-w-[625px] p-[4px] absolute top-[380px] right-[5%]"
//         >
//           <h1 className="text-[48px] mb-[24px]">Our Vision</h1>
//           <p className="text-[24px]">
//             Pioneering change and powering possibilities we’re <br />
//             shaping a future where robotics empowers people, <br />
//             transforming industries with smarter, safer innovation.
//           </p>
//         </motion.div>
//         </div> 

//         {/* "Our Mission" Block */}
//         <motion.div
//           style={{ opacity: missionOpacity , y:missionY  }} // Apply the animated opacity
//           className="mission-text max-w-[625px] p-[4px] absolute top-[600px] left-[5%]"
//         >
//           <h1 className="text-[48px] mb-[24px]">Our Mission</h1>
//           <p className="text-[24px]">
//             Driving a sustainable future through intelligent robotics
//             <br />
//             where innovation meets reliability, and engineering
//             <br />
//             transforms vision into impact.
//           </p>
//         </motion.div>

//       </section>
      
//     {/* <motion.div className="absolute bottom-0 flex justify-center"
//     style={{opacity: productsOpacity , y:productsY}}
//     >
//         <Products/>
//         </motion.div> */}
//     </div>
//   );
// };
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const About = () => {
  // `scrollRef` must point to the *outer runway* (the tall element),
  // not the sticky child. Framer's useScroll will then give progress
  // as the runway travels through the viewport.
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const aboutOpacity = useTransform(scrollYProgress, [0, 0.35, 0.45], [0.2, 1, 0.2]);
  const visionOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.85], [0, 0.2, 1, 0.2]);
  const missionOpacity = useTransform(scrollYProgress, [0.25, 0.65, 0.85, 1], [0, 0.2, 1, 1]);

  const aboutY = useTransform(scrollYProgress, [0.1, 0.55, 0.7], [0, 0, -600]);
  const visionY = useTransform(scrollYProgress, [0.1, 0.55, 0.7], [0, 0, -800]);
  const missionY = useTransform(scrollYProgress, [0.55, 0.55, 0.75], [100, 0, -450]);

  return (
    // OUTER RUNWAY: tall element that provides scroll height
    <section id="about" ref={scrollRef} className="relative w-full h-[1200vh]">
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
