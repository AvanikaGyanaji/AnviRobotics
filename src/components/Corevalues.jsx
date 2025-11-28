import React, { useRef, useEffect, useState } from "react";
import { Journey } from "./Journey";

export const Corevalues = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  const [moveDist, setMoveDist] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // 🔥 controls animation start

  // Calculate move distance once
  useEffect(() => {
    if (trackRef.current) {
      const fullWidth = trackRef.current.scrollWidth / 2; // width of one set
      const screenWidth = window.innerWidth;

      const distance = fullWidth - screenWidth; // how far to travel
      setMoveDist(distance);
    }
  }, []);

  // Intersection Observer for 80% visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.8) {
          setIsVisible(true);  // start animation
        } else {
          setIsVisible(false); // pause animation when out of view
        }
      },
      {
        threshold: 0.8,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="Corevalues"
        ref={sectionRef}
        className="max-h-screen h-auto  place-content-center w-full bg-[#eff0f0] light-bg-trigger"
      >
        <div className="flex flex-col justify-center items-center w-full bg-[#EEEEEE40] py-[50px] md:py-[50px] ">
          <h2 className="w-full mx-auto px-[10px]  text-center about-heading text-[48px] text-black font-[Arial] " >Our Core Values</h2>

          {/* Wrapper */}
          <div className="relative w-full overflow-hidden mt-6">

            {/* TRACK */}
            <div
              ref={trackRef}
              className="flex gap-x-[40px] md:gap-x-[160px] pl-[25px] whitespace-nowrap text-[40px] md:text-[80px] text-black core-pingpong"
              style={{
                fontFamily: "TransitDisplay",
                "--dist": `-${moveDist}px`,
                scrollBehavior:'smooth',
                animation:
                  isVisible && moveDist
                    ? "pingpongAnim 60s linear infinite"
                    : "none",
              }}
            >
              {/* ORIGINAL LIST */}
              <span>PRECISION</span>
              <span>INNOVATION</span>
              <span>ACCOUNTABILITY</span>
              <span>CONSISTENCY</span>
              <span>INTEGRITY</span>
              <span>CUSTOMER TRUST</span>
               <span>PRECISION</span>
              <span>INNOVATION</span>
              <span>ACCOUNTABILITY</span>
              <span>CONSISTENCY</span>
              <span>INTEGRITY</span>
              <span>CUSTOMER TRUST</span>

              {/* DUPLICATE LIST */}
              <span>PRECISION</span>
              <span>INNOVATION</span>
              <span>ACCOUNTABILITY</span>
              <span>CONSISTENCY</span>
              <span>INTEGRITY</span>
              <span>CUSTOMER TRUST</span>
            </div>
          </div>
        </div>


        

      </section>
     
      

      <style>{`
        @keyframes pingpongAnim {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(var(--dist));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};
