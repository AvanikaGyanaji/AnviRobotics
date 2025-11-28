import { useEffect, useRef, useState } from "react";
import { ChevronsUp } from "lucide-react";
// import { scrollToTarget } from "../hooks/ScrollToTarget";

export const Herosection = () => {
  // const scrollHeight = useRef(0);
  // const [hasScrolledToId, setHasScrolledToId] = useState(false);
  // const SCROLL_DURATION = 400;

  if (typeof window !== "undefined") {
    const introPlayed = sessionStorage.getItem("introPlayed");
    if (!introPlayed) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    }
  }

  useEffect(() => {
    const introPlayed = sessionStorage.getItem("introPlayed");
    const html = document.documentElement;
    const body = document.body;

    // Prevent scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!introPlayed) {
      window.scrollTo(0, 0);

      body.dataset.introDone = "false";

      const unlock = setTimeout(() => {
        // UNLOCK after intro
        html.style.overflow = "";
        html.style.height = "";
        body.style.overflow = "";
        body.style.height = "";

        body.dataset.introDone = "true";

        sessionStorage.setItem("introPlayed", "true");
      }, 4000);

      return () => clearTimeout(unlock);
    }

    // If already played
    html.style.overflow = "";
    html.style.height = "";
    body.style.overflow = "";
    body.style.height = "";
    body.dataset.introDone = "true";
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     scrollHeight.current = window.scrollY;
  //     const aboutUsElement = document.getElementById("about");

  //     // Check threshold (10px) AND if navigation has NOT occurred yet
  //     if (scrollHeight.current > 5 && !hasScrolledToId) {
  //       if (aboutUsElement) {
  //         // 🎯 MODIFICATION: Call the custom function with duration
  //         scrollToTarget(aboutUsElement, SCROLL_DURATION);

  //         // Mark as complete to prevent repetition
  //         setHasScrolledToId(true);
  //         // console.log(`Smoothly navigated to 'about' over ${SCROLL_DURATION}ms.`);
  //       }
  //     }
  //     // Reset logic: allow scrolling again if user returns to the top
  //     else if (scrollHeight.current < 5 && hasScrolledToId) {
  //       setHasScrolledToId(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [hasScrolledToId]);

  return (
    <section
      id="herosection"
      className="herosection w-full flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[-20]">
        <video
          className="w-full h-full object-cover video-Herosection "
          src="/anvirobotics.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center mr-[5%] px-[1vw]">
        <h1 className="heading hero-heading font-bold text-[#FEFEFE33]">
          <span className="word1">Smarter.</span>
          <span className="word2 pr-1">Faster.</span>
          <span className="word3 pr-1 relative">Limitless</span>
          <span className="tm absolute">
            ™
          </span>
        </h1>

        <p className="hero-text text-white flex flex-col justify-center items-center gap-y-[4px] max-w-[450px] font-[DM Sans] opacity-0">
          Empowering Enterprises with AI-driven robotics that learn, adapt, and
          excel at every task.
        </p>
      </div>

      <div className="text-scroll absolute bottom-[10px] opacity-0 flex gap-x-[5px]">
        <h1 className="inline-block text-white">Scroll to Roboverse</h1>
        <div className="indicator h-[20px] w-[20px] overflow-hidden   z-[100] bg-transparent">
          <div className="icons">
            <span className="text-[#888888]">
              <ChevronsUp />
            </span>
            <span className="text-white ">
              <ChevronsUp />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
