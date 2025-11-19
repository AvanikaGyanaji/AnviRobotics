// Home.jsx
import React, { useEffect, useRef } from "react";
import { Herosection } from "../components/Herosection";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Technology } from "../components/Technology";
import { Corevalues } from "../components/Corevalues";
import { Journey } from "../components/Journey";
import { ContactUs } from "../components/ContactUs";

export const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

useEffect(() => {
  const hero = heroRef.current;
  const about = aboutRef.current;
  const gradient = document.querySelector(".hero-gradient");
  if (!hero || !about || !gradient) return;

  let observersEnabled = false;

  // ⭐ Delay observer activation to avoid wrong initial triggers
  setTimeout(() => {
    observersEnabled = true;
  }, 150);

  const setBodyWhite = () => {
    document.body.classList.add("body-white");
    document.body.classList.remove("body-black");
  };

  const setBodyBlack = () => {
    document.body.classList.add("body-black");
    document.body.classList.remove("body-white");
  };

  // HERO OBSERVER
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      if (!observersEnabled) return;
      if (document.body.dataset.introDone !== "true") return;

      if (entry.intersectionRatio >= 0.2) {
        setBodyWhite();
      } else {
        setBodyBlack();
      }
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    }
  );

  heroObserver.observe(hero);

  // ABOUT OBSERVER
  const aboutObserver = new IntersectionObserver(
    ([entry]) => {
      if (!observersEnabled) return;
      if (document.body.dataset.introDone !== "true") return;

      if (entry.intersectionRatio >= 0.2) {
        setBodyBlack();
      }
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    }
  );

  aboutObserver.observe(about);

  // GRADIENT OBSERVER
  const gradientObserver = new IntersectionObserver(
    ([entry]) => {
      if (!observersEnabled) return;
      if (document.body.dataset.introDone !== "true") return;

      if (entry.intersectionRatio >= 0.6) {
        gradient.classList.remove("hero-expanded");
      } else {
        gradient.classList.add("hero-expanded");
      }
    },
    {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    }
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
    
      <main className="relative ">
       <div ref={heroRef}>
  <Herosection />
</div>

<div ref={aboutRef}>
  <About />
</div>

<Products />

<Technology />

<Corevalues/>     

<Journey/>

<ContactUs/>

        {/* Shared fixed gradient */}
<div
  className="hero-gradient fixed bottom-[-180px] pointer-events-none"
  style={{ left: "50%", transform: "translate(-50%, 0)" }}
/>

      </main>
    </>
  );
};
