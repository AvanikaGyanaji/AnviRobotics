import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Technology = () => {
//   const scrollRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: scrollRef,
//     offset: ["start end", "end start"], // smooth animation
//   });

//   const transparent ="transparent";
//   const white = "#ffffff";
//   const black ="#000000"
//   const boxOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
//   const boxbgcolor = useTransform(scrollYProgress, [0.35,1],[transparent,white])
//   const textcolor = useTransform(scrollYProgress , [0,0.34],["ffffff","ffffff"])


  return (<></>
    // <section
    //   id="technologies"
    //   ref={scrollRef}
    //   className="relative w-full h-[200vh]" // ⭐ huge runway
    // >
    //   {/* ⭐ Content stays FIXED on screen */}
    //   <div className="sticky top-[120px] flex justify-center">
    //     <motion.div
    //       style={{ opacity: boxOpacity ,backgroundColor:boxbgcolor}}
    //       className="w-full rounded-[32px] h-[780px]"
    //     >
    //       <h1 style={{color:textcolor, fontSize:44 , textAlign:"center"}}>Our Technology</h1>
    //       <p style={{color:textcolor, fontSize:24, textAlign:"center"}} >
    //         Blending AI, precision engineering, and automation we build robots
    //         that deliver <br /> unmatched power endurance, and intelligence.
    //       </p>
    //     </motion.div>
    //   </div>
    // </section>
  );
};
