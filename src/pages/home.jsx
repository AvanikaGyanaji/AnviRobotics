// Home.jsx
import React, { useEffect, useRef } from "react";
import { Herosection } from "../components/Herosection";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Technology } from "../components/Technology";
import { Corevalues } from "../components/Corevalues";
import { Journey } from "../components/Journey";
import { ContactUs } from "../components/ContactUs";
import { Footer } from "../components/Footer";

export const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const about = aboutRef.current;
    const gradient = document.querySelector(".hero-gradient");
    if (!hero || !about || !gradient) return;

    let observersEnabled = false;
    setTimeout(() => (observersEnabled = true), 150);

    const setBodyWhite = () => {
      document.body.classList.add("body-white");
      document.body.classList.remove("body-black");
    };
    const setBodyBlack = () => {
      document.body.classList.add("body-black");
      document.body.classList.remove("body-white");
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (!observersEnabled) return;
        if (document.body.dataset.introDone !== "true") return;

        if (entry.intersectionRatio >= 0.2) setBodyWhite();
        else setBodyBlack();
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    heroObserver.observe(hero);

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (!observersEnabled) return;
        if (document.body.dataset.introDone !== "true") return;

        if (entry.intersectionRatio >= 0.2) setBodyBlack();
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    aboutObserver.observe(about);

    const gradientObserver = new IntersectionObserver(
      ([entry]) => {
        if (!observersEnabled) return;
        if (document.body.dataset.introDone !== "true") return;

        gradient.classList.toggle(
          "hero-expanded",
          entry.intersectionRatio < 0.6
        );
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
    <main className="snap-container relative">
      {/* SNAP SECTIONS */}
      <section ref={heroRef} className="snap-section">
        <Herosection />
      </section>

      <section ref={aboutRef} className="snap-section">
        <About />
      </section>

      <section className="snap-section">
        <Products />
      </section>

      <section className="snap-section">
        <Technology />
      </section>

      <section className="snap-section">
        <Corevalues />
      </section>

      <section className="snap-section">
        <Journey />
      </section>

      <section className="snap-section">
        <ContactUs />
      </section>

    

      {/* Fixed background gradient */}
      <div
        className="hero-gradient fixed bottom-[-180px] pointer-events-none"
        style={{ left: "50%", transform: "translate(-50%,0)" }}
      />
    </main>
  );
};
