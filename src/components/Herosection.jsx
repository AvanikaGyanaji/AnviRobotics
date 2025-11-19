import { useEffect } from "react";
import { ChevronsUp } from "lucide-react";

// export const Herosection = () => {
//   // useEffect(() => {
//   //   // Always start at the top
//   //   window.scrollTo({ top: 0, behavior: "instant" });

//   //   // Prevent browser restoring scroll position
//   //   if ("scrollRestoration" in window.history) {
//   //     window.history.scrollRestoration = "manual";
//   //   }

//   //   // ⭐ REQUIRED FLAG FOR OBSERVERS
//   //   document.body.dataset.introDone = "false";

//   //   // 🔒 BLOCK SCROLL DURING INTRO
//   //   document.body.style.overflow = "hidden";
//   //   document.body.style.height = "100vh";

//   //   // ⏳ UNLOCK AFTER INTRO (4s) + mark done
//   //   const unlock = setTimeout(() => {
//   //     document.body.style.overflow = "auto";
//   //     document.body.style.height = "auto";

//   //     // ⭐ Tell Home.jsx observers to start working
//   //     document.body.dataset.introDone = "true";
//   //   }, 4000);

//   //   return () => clearTimeout(unlock);
//   // }, []);

// useEffect(() => {
//   const introPlayed = sessionStorage.getItem("introPlayed");
//   const html = document.documentElement;
//   const body = document.body;

//   // Prevent scroll restoration
//   if ("scrollRestoration" in window.history) {
//     window.history.scrollRestoration = "manual";
//   }

//   if (!introPlayed) {
//     // Always start at top
//     window.scrollTo(0, 0);

//     // FULL LOCK
//     html.style.overflow = "hidden";
//     html.style.height = "100vh";      // ⭐ needed
//     html.style.scrollSnapType = "none"; // ⭐ needed

//     body.style.overflow = "hidden";
//     body.style.height = "100vh";

//     body.dataset.introDone = "false";

//     const unlock = setTimeout(() => {
//       html.style.overflow = "";
//       html.style.height = "";
//       html.style.scrollSnapType = "";  // restore snap

//       body.style.overflow = "";
//       body.style.height = "";

//       body.dataset.introDone = "true";
//       sessionStorage.setItem("introPlayed", "true");
//     }, 4000);

//     return () => clearTimeout(unlock);
//   }

//   // If already played
//   html.style.overflow = "";
//   html.style.height = "";
//   html.style.scrollSnapType = "";

//   body.style.overflow = "";
//   body.style.height = "";
//   body.dataset.introDone = "true";
// }, []);

export const Herosection = () => {

  // 🔒 IMMEDIATE SCROLL LOCK (executed before paint)
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

  return (
    <section
      id="herosection"
      className="herosection h-screen w-full flex flex-col justify-center items-center relative overflow-hidden"
    ><div className="absolute inset-0 w-full h-full overflow-hidden z-[-20]">
  <video
    className="w-full h-full object-cover video-Herosection "
    src="/anvirobotics.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="heading hero-heading font-bold text-[#FEFEFE33]">
          <span className="word1">Smarter.</span>
          <span className="word2 pr-1">Faster.</span>
          <span className="word3 pr-1">Limitless</span>
          <span className="tm">™</span>
        </h1>

        <p className="hero-text text-white flex flex-col justify-center items-center gap-y-[4px] text-[18px] font-[DM Sans] opacity-0">
          <span>Empowering Enterprises with AI-driven robotics that learn, adapt,</span>
          <span>and excel at every task.</span>
        </p>
      </div>

      <div className="text-scroll absolute bottom-[10px] opacity-0 flex gap-x-[5px]">
        <h1 className="inline-block text-white">Scroll to Roboverse</h1>
        <div className="h-[20px] overflow-auto scrollbar-hide z-[100] bg-transparent">
          <span className="text-[#888888] updown"><ChevronsUp /></span>
          <span className="text-white updown"><ChevronsUp /></span>
        </div>
      </div>
    </section>
  );
};
