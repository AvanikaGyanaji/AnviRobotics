// Home.jsx
import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Herosection } from "../components/Herosection";
import { About } from "../components/About";
import { Products } from "../components/Products";

export const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const about = aboutRef.current;
    const gradient = document.querySelector(".hero-gradient");
    if (!hero || !about || !gradient) return;

    // Helper to set body classes safely
    const setBodyWhite = () => {
      document.body.classList.add("body-white");
      document.body.classList.remove("body-black");
    };
    const setBodyBlack = () => {
      document.body.classList.add("body-black");
      document.body.classList.remove("body-white");
    };

   // 1️⃣ HERO OBSERVER — 20% visible → white
const heroObserver = new IntersectionObserver(
  ([entry]) => {
    if (document.body.dataset.introDone !== "true") return;

    if (entry.intersectionRatio >= 0.2) {
      // Hero 20% visible → white immediately
      setBodyWhite();
    } else {
      // Less than 20% visible → black
      setBodyBlack();
    }
  },
  {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  }
);
heroObserver.observe(hero);

// 2️⃣ ABOUT OBSERVER — 20% visible → black immediately
const aboutObserver = new IntersectionObserver(
  ([entry]) => {
    if (document.body.dataset.introDone !== "true") return;

    if (entry.intersectionRatio >= 0.2) {
      // About enters 20% → black background immediately
      setBodyBlack();
    } else {
      // If About drops below 20%, hero observer takes over for white
      // (no need to manually revert)
    }
  },
  {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  }
);
aboutObserver.observe(about);


    // 3) gradient sizing (same as before): compact when hero mostly visible, expanded otherwise
    const gradientObserver = new IntersectionObserver(
      ([entry]) => {
        if (document.body.dataset.introDone !== "true") return;

        if (entry.intersectionRatio >= 0.6) {
          gradient.classList.remove("hero-expanded");
        } else {
          gradient.classList.add("hero-expanded");
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    gradientObserver.observe(hero);

    return () => {
      heroObserver.disconnect();
      aboutObserver.disconnect();
      gradientObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="relative ">
        <section ref={heroRef}>
          <Herosection />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section>
          <Products/>
        </section>

        {/* Shared fixed gradient */}
        <div className="hero-gradient fixed bottom-[-180px] left-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
      </main>
    </>
  );
};
