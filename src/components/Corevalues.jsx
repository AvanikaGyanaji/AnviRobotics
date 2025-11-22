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
        className="min-h-screen place-content-center w-full"
      >
        <div className="flex flex-col justify-center items-center w-full bg-[#00000033]">
          <h1 className="text-[48px] text-white font-[Arial] " >Our Core Values</h1>

          {/* Wrapper */}
          <div className="relative w-full overflow-hidden mt-6">

            {/* TRACK */}
            <div
              ref={trackRef}
              className="flex gap-x-[160px] pl-[25px] whitespace-nowrap text-[80px] text-white core-pingpong"
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
