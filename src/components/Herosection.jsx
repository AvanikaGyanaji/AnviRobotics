import { useEffect } from "react";

export const Herosection = () => {
 useEffect(() => {
  const hero = document.getElementById("herosection");
  if (!hero) return;

  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }


  window.scrollTo({ top: 0, behavior: "instant" });

  // 🕹 Start intro (body locked & black)
  document.body.classList.add("body-black");
  document.body.classList.remove("body-white");
  document.body.dataset.introDone = "false";
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";

 
  const introTimeout = setTimeout(() => {
    // Mark intro complete
    document.body.dataset.introDone = "true";

    // Unlock scroll
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    // Smoothly transition to white background
    document.body.classList.add("body-white");
    document.body.classList.remove("body-black");
  }, 3800);

  return () => clearTimeout(introTimeout);
}, []);


  return (
    <section
      id="herosection"
      className="herosection h-screen w-full flex flex-col justify-center items-center relative overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="heading hero-heading font-bold text-[#FEFEFE33]">
          <span className="word1">Smarter.</span>
          <span className="word2 pr-1">Faster.</span>
          <span className="word3 pr-1">Limitless</span>
          <span className="tm">™</span>
        </h1>

        <p className="hero-text flex flex-col justify-center items-center gap-y-[4px] text-[18px] font-[DM Sans] opacity-0">
          <span>
            Empowering Enterprises with AI-driven robotics that learn, adapt,
          </span>
          <span>and excel at every task.</span>
        </p>
      </div>

      <div className="text-scroll absolute bottom-[10px] opacity-0">
        <h1>Scroll to Roboverse</h1>
      </div>
    </section>
  );
};
