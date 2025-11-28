import React, { useEffect, useRef, useState } from "react";
import RobotFeatures from "../components/RobotFeatures";
import { Section6 } from "../components/Section6";
import { Footer } from "../components/Footer";

const Surveillance = () => {
  const containerRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const isMobile = window.innerWidth < 768;

  const [scrollY, setScrollY] = useState(0);
  const [section2Progress, setSection2Progress] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // Update container height dynamically
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight - window.innerHeight;
        setContainerHeight(height > 0 ? height : 0);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ZOOM transition variables for Section 3 → 4
  let section3Scale = 1,
    section3Opacity = 1,
    section4Scale = 0.85,
    section4Opacity = 0;

  if (section3Ref.current && section4Ref.current) {
    const section3Top = section3Ref.current.offsetTop;
    const section4Top = section4Ref.current.offsetTop;

    if (scrollY >= section3Top && scrollY <= section4Top) {
      const progress = (scrollY - section3Top) / (section4Top - section3Top);
      section3Scale = 1 - progress * 0.5;
      section3Opacity = 1 - progress * 0.2;
      section4Scale = 0.85 + progress * 0.15;
      section4Opacity = progress;
    } else if (scrollY < section3Top) {
      section3Scale = 1;
      section3Opacity = 1;
      section4Scale = 0.85;
      section4Opacity = 0;
    } else {
      section3Scale = 0.5;
      section3Opacity = 0.8;
      section4Scale = 1;
      section4Opacity = 1;
    }
  }

  // Handle wheel scroll with Section 2 locking
  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current || !section2Ref.current) return;

      const section2Top = section2Ref.current.offsetTop;
      const section2Height = section2Ref.current.offsetHeight;
      const section2Bottom = section2Top + section2Height;

      const currentScroll = window.scrollY;
      const isSection2InView =
        currentScroll >= section2Top && currentScroll < section2Bottom;

      const progressIncrement = Math.abs(e.deltaY) / 1000;

      if (isSection2InView) {
        // Scrolling down in Section 2
        if (e.deltaY > 0 && section2Progress < 1) {
          e.preventDefault();
          setSection2Progress((prev) => Math.min(prev + progressIncrement, 1));
          return;
        }
        // Scrolling up in Section 2
        else if (e.deltaY < 0 && section2Progress > 0) {
          e.preventDefault();
          setSection2Progress((prev) => Math.max(prev - progressIncrement, 0));
          return;
        }
        // Allow normal scroll when fully revealed/hidden
        else if (
          (e.deltaY > 0 && section2Progress >= 1) ||
          (e.deltaY < 0 && section2Progress <= 0)
        ) {
          // Normal scroll will happen
          return;
        }
      }
      // When entering Section 2 from Section 3 (scrolling UP)
      else if (currentScroll >= section2Bottom && e.deltaY < 0) {
        const newScroll = currentScroll + e.deltaY;
        if (newScroll < section2Bottom) {
          e.preventDefault();
          setSection2Progress(1);
          window.scrollTo({ top: section2Top, behavior: "auto" });
        }
      }
      // When entering Section 2 from Section 1 (scrolling DOWN)
      else if (currentScroll < section2Top && e.deltaY > 0) {
        const newScroll = currentScroll + e.deltaY;
        if (newScroll >= section2Top) {
          e.preventDefault();
          setSection2Progress(0);
          window.scrollTo({ top: section2Top, behavior: "auto" });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollY, section2Progress]);

  return (
    <div className="relative w-full bg-black">
      
      {/* Wrapper for Sections 1–4 only */}
      <div ref={containerRef} className="relative overflow-hidden">

        {/* Fixed background active only in this wrapper */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-0">
          <img
            src="/surveillance/B6.png"
            alt="Robot"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Sections 1–4 */}
        <div ref={containerRef} className="relative z-10">
          <div className="min-h-screen flex flex-col items-start px-4 sm:px-8 md:px-[60px] py-[150px]">
          <h1 className="text-[36px] md:text-[56px] font-arial font-regular text-white">
            Surveillance <br /> Robot
          </h1>
          <p className="max-w-[420px] font-dm text-[16px] leading-7 text-[#FEFEFE76] mt-2">
            Revolutionary AI-powered security that never sleeps. Protect your
            property with intelligent, autonomous patrol technology.
          </p>
        </div>

        {/* Section 2 */}
        <div
          ref={section2Ref}
          className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-[60px]"
        >
          <p className="text-[24px] md:text-[28px] lg:text-[32px] font-regular leading-8 lg:leading-10 text-white break-words">
            {(() => {
              const text =
                "Our AI-powered Surveillance Robot redefines modern security and safety. It offers real-time monitoring with intelligent data analysis. With autonomous mobility, it ensures seamless and efficient operations. Designed for reliability, it delivers continuous vigilance and rapid response.";
              
              if (isMobile) {
                // 🟢 Mobile → All text fully visible, no reveal
                return <span>{text}</span>;
              }
              
              const revealLength = Math.floor(section2Progress * text.length);
              const visibleText = text.slice(0, revealLength);
              const hiddenText = text.slice(revealLength);

              return (
                <>
                  <span>{visibleText}</span>
                  <span className="opacity-30">{hiddenText}</span>
                </>
              );
            })()}
          </p>
        </div>

        {/* Section 3 */}
        <div
          ref={section3Ref}
          className="
            min-h-screen bg-black 
            flex flex-col md:flex-row 
            items-center justify-between 
            px-6 md:px-12 lg:px-[60px] 
            py-10 md:py-[60px] 
            gap-10 md:gap-0 
            transition-all duration-300
          "
          style={{ transform: isMobile? "none" : `scale(${section3Scale})`, opacity: isMobile? 1 : section3Opacity }}
        >
          {/* Left Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="/surveillance/b31.png"
              className="w-[320px] h-[200px] md:w-[380px] md:h-[220px] lg:w-[457px] lg:h-[496px] object-cover"
              alt="Side view"
            />
          </div>

          {/* Center Text */}
          <p
            className="
              text-white 
              text-[20px] md:text-[20px] lg:text-[30px] 
              text-center font-light leading-relaxed 
              max-w-[90%] px-4 md:px-0 md:max-w-[300px]
            "
          >
            "We Make <span className="text-[#EFEFEF76]">Security Smarter, Safer, And Endlessly Vigilant.</span>"
          </p>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/surveillance/b32.png"
              className="w-[320px] h-[200px] md:w-[380px] md:h-[220px] lg:w-[457px] lg:h-[496px] object-cover"
              alt="Front view"
            />
          </div>
        </div>


        {/* Section 4 */}
        <div
          ref={section4Ref}
          className="min-h-screen relative bg-black transition-all duration-300 ease-out"
          style={{
            transform: isMobile ? "none" : `scale(${section4Scale})`,
            opacity: isMobile ? 1 : section4Opacity,
          }}
        >
          <RobotFeatures />
        </div>

        </div>

      </div>

      {/* Sections 5–6 will scroll normally with NO fixed background */}
      <div className="relative bg-black z-0">
        <div className="min-h-screen relative bg-black w-full px-4 sm:px-8 md:px-[50px] py-[50px]">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-white mb-10 text-center">
            Our Robot Solutions
          </h2>
          {/* Image Grid Section */}
          <div className="flex flex-col gap-6">
            {/* Row 1: Large + Small */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
              {/* Large Card */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg h-[351px]">
                <img
                  loading="lazy"
                  src="/surveillance/B6.png"
                  alt="Technological Excellence"
                  className="w-full h-full object-cover"
                />

              {/* Overlay */}
              <div className="absolute inset-0 transition-all duration-300 flex flex-col justify-end p-8 text-white bg-black/0 group-hover:bg-black/70">

                <p className="text-sm font-bold max-w-[340px] transition-all duration-500 transform group-hover:translate-y-[-280px]">
                  Cost-Effective Security
                </p>

                {/*hidden initially, slides in on hover */}
                <p className="text-[#EFEFEF76] md:text-[#FFFFFFE5] text-[14px] font-dm max-w-[225px] mt-2 max-sm:opacity-100 max-sm:max-h-none max-sm:static md:absolute md:bottom-4 md:right-4 md:opacity-0 md:max-h-0 md:overflow-hidden md:group-hover:max-h-[100px] md:group-hover:opacity-100 transition-all duration-500">
                  Reduce security personnel cost by up to 60% while maintaining 24/7 coverage
                </p>
              </div>
            </div>

              {/* Small Card */}
              <div className="relative z-10 overflow-hidden rounded-2xl group shadow-lg h-[351px]">
                <img
                  loading="lazy"
                  src="/surveillance/A10.png"
                  alt="Strategic Focus"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 transition-all duration-300 flex flex-col justify-end p-8 text-white bg-black/0 group-hover:bg-black/70">
                  <p className="text-sm font-bold max-w-[340px] transition-all duration-500 transform group-hover:translate-y-[-280px]">
                    Smart Sentinel
                  </p>
                  {/* hidden initially, slides in on hover */}
                  <p className="text-[#EFEFEF76] md:text-[#FFFFFFE5] text-[14px] font-dm max-w-[225px] mt-2 max-sm:opacity-100 max-sm:max-h-none max-sm:static md:absolute md:bottom-4 md:right-4 md:opacity-0 md:max-h-0 md:overflow-hidden md:group-hover:max-h-[100px] md:group-hover:opacity-100 transition-all duration-500">
                    Keep human security personnel out of potentially dangerous
                    situations
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Small + Large */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
              {/* Small Card */}
              <div className="relative overflow-hidden rounded-2xl group shadow-lg h-[351px]">
                <img
                  loading="lazy"
                  src="/surveillance/F4.png"
                  alt="Visible Deterrence"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 transition-all duration-300 flex flex-col justify-end p-8 text-white bg-black/0 group-hover:bg-black/70">
                  <p className="text-sm font-bold max-w-[340px] transition-all duration-500 transform max-sm:-translate-y-0 md:group-hover:translate-y-[-280px]">
                    Visible Detterence
                  </p>

                  {/* hidden initially, slides in on hover */}
                  <p className="text-[#EFEFEF76] md:text-[#FFFFFFE5] text-[14px] font-dm max-w-[225px] mt-2 max-sm:opacity-100 max-sm:max-h-none max-sm:static md:absolute md:bottom-4 md:right-4 md:opacity-0 md:max-h-0 md:overflow-hidden md:group-hover:max-h-[100px] md:group-hover:opacity-100 transition-all duration-500">
                    Advanced robotic presence deters criminal activity before it
                    starts
                  </p>
                </div>
              </div>

            {/* Large Card */}
            <div className="relative overflow-hidden group rounded-2xl shadow-lg h-[351px]">
              <img
                loading="lazy"
                src="/surveillance/G6.png"
                alt="Impact-Driven Solutions"
                className="w-max h-full object-cover group-hover:scale-[1.05] transition-all duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 transition-all duration-300 flex flex-col justify-end p-8 text-white bg-black/0 group-hover:bg-black/70">

                <p className="text-[14px] font-bold max-w-[340px] transition-all duration-500 transform group-hover:translate-y-[-280px]">
                  Scalable Security
                </p>

                {/*hidden initially, slides in on hover */}
                <p className="text-[#EFEFEF76] md:text-[#FFFFFFE5] text-[14px] font-dm max-w-[225px] mt-2 max-sm:opacity-100 max-sm:max-h-none max-sm:static md:absolute md:bottom-4 md:right-4 md:opacity-0 md:max-h-0 md:overflow-hidden md:group-hover:max-h-[100px] md:group-hover:opacity-100 transition-all duration-500">
                  Easily expand your security coverage across multiple locations
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section 6 */}
        <Section6 scrollY={scrollY} />
        <Footer/>
      </div>
    </div>
  );

};

export default Surveillance;
