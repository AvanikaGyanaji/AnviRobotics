// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";

// export const Header = () => {
//   const [activeSection, setActiveSection] = useState("herosection");
//   const [logoState, setLogoState] = useState("white");
//   const [navTextColor, setNavTextColor] = useState("text-white");
//   const [showNav, setShowNav] = useState(false);
//   const [showIntroLogos, setShowIntroLogos] = useState(true);
//   const [introDone, setIntroDone] = useState(false);
//   const heroVisibleOnce = useRef(false);

//   const location = useLocation();
// const isHome = location.pathname === "/";


//   useEffect(() => {
//     const timer = setTimeout(() => setShowIntroLogos(false), 4500);

//     const hero = document.getElementById("herosection");
//     const sections = Array.from(document.querySelectorAll("section[id]"));
//     if (!hero || !sections.length) return;

//     // 1️⃣ Track when intro animation completes (from Herosection)
//     const checkIntroDone = () => {
//       const done = document.body.dataset.introDone === "true";
//       setIntroDone(done);
//       if (done) {
//         // fade nav in slightly after intro
//         setTimeout(() => setShowNav(true), 400);
//       } else {
//         setShowNav(false);
//       }
//     };

//     const introObserver = new MutationObserver(() => checkIntroDone());
//     introObserver.observe(document.body, {
//       attributes: true,
//       attributeFilter: ["data-introDone"],
//     });
//     checkIntroDone();

//     // 2️⃣ Observe <body> class changes for color (white/black)
//     const updateHeaderByBody = () => {
//       const body = document.body;
//       const isWhite = body.classList.contains("body-white");

//       if (!showIntroLogos) {
//         if (isWhite) {
//           setLogoState("black");
//           setNavTextColor("text-black");
//         } else {
//           setLogoState("white");
//           setNavTextColor("text-white");
//         }
//       }
//     };

//     const bodyObserver = new MutationObserver(() => updateHeaderByBody());
//     bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
//     updateHeaderByBody();

//     // 3️⃣ Hero observer (pre-intro logic)
//     const heroObserver = new MutationObserver(() => {
//       const bg = hero.dataset.bg;
//       const rect = hero.getBoundingClientRect();
//       const inView = rect.top < window.innerHeight && rect.bottom > 0;

//       if (inView && bg === "white") {
//         heroVisibleOnce.current = true;
//       } else if (inView && bg === "black" && !heroVisibleOnce.current) {
//         setShowNav(false);
//       }
//     });
//     heroObserver.observe(hero, { attributes: true, attributeFilter: ["data-bg"] });

//     // 4️⃣ Scroll tracking for active section highlighting
//     const getHeaderBottom = () => {
//       const headerEl = document.querySelector("header.header");
//       if (!headerEl) return 0;
//       const r = headerEl.getBoundingClientRect();
//       return r.bottom;
//     };

//     let ticking = false;
//     const onFrame = () => {
//       ticking = false;
//       const headerBottom = getHeaderBottom();
//       const tolerance = 6;
//       let matched = null;

//       for (const s of sections) {
//         const r = s.getBoundingClientRect();
//         if (r.top <= headerBottom + tolerance && r.bottom > headerBottom - tolerance) {
//           matched = s;
//           break;
//         }
//       }

//       if (!matched) return;

//       const id = matched.id;
//       const theme = matched.dataset.theme || "dark";
//       setActiveSection(id);

//       // Skip hero color changes — body handles that
//       if (id !== "herosection") {
//         if (theme === "light") {
//           setLogoState("black");
//           setNavTextColor("text-black");
//         } else {
//           setLogoState("white");
//           setNavTextColor("text-white");
//         }
//       }
//       if (introDone) setShowNav(true);
//     };

//     const onScroll = () => {
//       if (!ticking) {
//         ticking = true;
//         requestAnimationFrame(onFrame);
//       }
//     };

//     onFrame();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);

//     return () => {
//       clearTimeout(timer);
//       introObserver.disconnect();
//       bodyObserver.disconnect();
//       heroObserver.disconnect();
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, [showIntroLogos, introDone]);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="header fixed top-[36px] w-full flex justify-between items-center px-[120px] z-[2000] transition-all duration-300">
//       {/* --- Intro Logos --- */}
//       {showIntroLogos && (
//         <div className="absolute left-[90px] w-[110px] h-[70px] pointer-events-none">
//           <img src="/logos/anvi_white.png" className="logo-white" alt="Intro White" />
//           <img src="/logos/anvi_black.png" className="logo-black" alt="Intro Black" />
//         </div>
//       )}

//       {/* --- Main Logo --- */}
//       <div
//         className={`relative w-[110px] h-[70px]  transition-opacity duration-700 ${
//           showIntroLogos ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <img
//           src="/logos/anvi_white.png"
//           className={`absolute inset-0 w-[110px] h-[70px] object-contain transition-opacity duration-500 ${
//             logoState === "white" ? "opacity-100" : "opacity-0"
//           }`}
//           alt="White Logo"
//         />
//         <img
//           src="/logos/anvi_black.png"
//           className={`absolute inset-0 w-[110px] h-[70px] object-contain transition-opacity duration-500 ${
//             logoState === "black" ? "opacity-100" : "opacity-0"
//           }`}
//           alt="Black Logo"
//         />
//       </div>

//       {/* --- Navigation --- */}
//       {/* <nav
//         className={`flex gap-x-[22px] text-lg font-medium transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//           showNav && introDone
//             ? "animate-fadeDown opacity-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 -translate-y-7 pointer-events-none"
//         }`}
//         style={{
//           color: logoState === "black" ? "#000000" : "#888888",
//           transition: "color 0.1s ease-in-out",
//         }}
//       >
//        {[
//   { id: "about", label: "About" },
//   { id: "products" ,label: "Products" },
//   { id: "technologies", label: "Technology" },
//   { id: "contact", label: "Contact" },
// ].map(({ id, label,link }) => (  
//   <Link to={link?link:""} key={id} onClick={() => scrollTo(id) } >
//     <div
//       className={`navlink flex flex-col h-[25px] overflow-hidden transition-all duration-100 ${
//         activeSection === id
//           ? "active  "
//           : "opacity-80 hover:opacity-100"
//       }`}
//     >
//       <span
//         className={`transition-all duration-100 ${
//           activeSection === id ? "text-white" : ""
//         }`}
//       >
//         {label}
//       </span>
//       <span className="text-white" style={{ color: logoState === "black" ? "#000000" :"#ffffff"}}
//       >{label}</span>
//     </div>
//   </Link>
// ))}

//       </nav> */}
//       <nav
//   className={`flex gap-x-[22px] text-lg font-medium transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//     showNav && introDone
//       ? "animate-fadeDown opacity-100 translate-y-0 pointer-events-auto"
//       : "opacity-0 -translate-y-7 pointer-events-none"
//   }`}
//   style={{
//     color: logoState === "black" ? "#000000" : "#888888",
//     transition: "color 0.1s ease-in-out",
//   }}
// >
//   {[
//     { id: "about", label: "About" },
//     { id: "products", label: "Products" },
//     { id: "technologies", label: "Technology" },
//     { id: "contact", label: "Contact" },
//   ].map(({ id, label }) => (
//     <Link
//       key={id}
//       to={isHome ? "" : "/"}
//       onClick={() => {
//         if (isHome) scrollTo(id);
//       }}
//     >
//       <div
//         className={`navlink flex flex-col h-[25px] overflow-hidden transition-all duration-100 ${
//           activeSection === id ? "active" : "opacity-80 hover:opacity-100"
//         }`}
//       >
//         <span className={activeSection === id ? "text-white" : ""}>{label}</span>
//         <span
//           className="text-white"
//           style={{ color: logoState === "black" ? "#000000" : "#ffffff" }}
//         >
//           {label}
//         </span>
//       </div>
//     </Link>
//   ))}
// </nav>

//     </header>
//   );
// };

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("herosection");
  const [logoState, setLogoState] = useState("white");
  const [navTextColor, setNavTextColor] = useState("text-white");
  const [showNav, setShowNav] = useState(false);
  const [showIntroLogos, setShowIntroLogos] = useState(true);
  const [introDone, setIntroDone] = useState(false);
  const heroVisibleOnce = useRef(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    //
    // ⭐  NOT HOME PAGE → SIMPLE STATIC HEADER + PRODUCTS ACTIVE
    //
    if (!isHome) {
      setActiveSection("products");
      setShowIntroLogos(false);
      setIntroDone(true);
      setShowNav(true);
      setLogoState("white");
      setNavTextColor("text-white");
      return; // STOP HOME LOGIC HERE
    }

    //
    // ⭐  HOME PAGE LOGIC BELOW
    //

    const timer = setTimeout(() => setShowIntroLogos(false), 4500);

    const hero = document.getElementById("herosection");
    const sections = Array.from(document.querySelectorAll("section[id]"));

    if (!hero || !sections.length) return;

    // 1️⃣ Intro observer
    const checkIntroDone = () => {
      const done = document.body.dataset.introDone === "true";
      setIntroDone(done);
      if (done) setTimeout(() => setShowNav(true), 400);
      else setShowNav(false);
    };

    const introObserver = new MutationObserver(() => checkIntroDone());
    introObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-introDone"],
    });
    checkIntroDone();

    // 2️⃣ Track body theme (black/white)
    const updateHeaderByBody = () => {
      const isWhite = document.body.classList.contains("body-white");

      if (!showIntroLogos) {
        if (isWhite) {
          setLogoState("black");
          setNavTextColor("text-black");
        } else {
          setLogoState("white");
          setNavTextColor("text-white");
        }
      }
    };

    const bodyObserver = new MutationObserver(() => updateHeaderByBody());
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    updateHeaderByBody();

    // 3️⃣ Hero observer pre-intro
    const heroObserver = new MutationObserver(() => {
      const bg = hero.dataset.bg;
      const rect = hero.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && bg === "white") {
        heroVisibleOnce.current = true;
      } else if (inView && bg === "black" && !heroVisibleOnce.current) {
        setShowNav(false);
      }
    });

    heroObserver.observe(hero, { attributes: true, attributeFilter: ["data-bg"] });

    // 4️⃣ Scroll listener for active section
    const getHeaderBottom = () => {
      const headerEl = document.querySelector("header.header");
      return headerEl ? headerEl.getBoundingClientRect().bottom : 0;
    };

    let ticking = false;

    const onFrame = () => {
      ticking = false;

      const headerBottom = getHeaderBottom();
      const tolerance = 6;

      let matched = null;

      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= headerBottom + tolerance && r.bottom > headerBottom - tolerance) {
          matched = s;
          break;
        }
      }

      if (!matched) return;

      const id = matched.id;
      const theme = matched.dataset.theme || "dark";

      setActiveSection(id);

      if (id !== "herosection") {
        if (theme === "light") {
          setLogoState("black");
          setNavTextColor("text-black");
        } else {
          setLogoState("white");
          setNavTextColor("text-white");
        }
      }

      if (introDone) setShowNav(true);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onFrame);
      }
    };

    onFrame();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Cleanup
    return () => {
      clearTimeout(timer);
      introObserver.disconnect();
      bodyObserver.disconnect();
      heroObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome, showIntroLogos, introDone]);

  const scrollTo = (id) => {
    if (!isHome) return; // avoid errors on other pages
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header fixed top-[36px] w-full flex justify-between items-center px-[120px] z-[2000] transition-all duration-300">
      
      {/* Intro Logos only on home */}
      {showIntroLogos && isHome && (
        <div className="absolute left-[90px] w-[110px] h-[70px] pointer-events-none">
          <img src="/logos/anvi_white.png" className="logo-white" />
          <img src="/logos/anvi_black.png" className="logo-black" />
        </div>
      )}

      {/* Main Logo */}
      <div
        className={`relative w-[110px] h-[70px] transition-opacity duration-700 ${
          showIntroLogos && isHome ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/logos/anvi_white.png"
          className={`absolute inset-0 object-contain transition-opacity duration-500 ${
            logoState === "white" ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src="/logos/anvi_black.png"
          className={`absolute inset-0 object-contain transition-opacity duration-500 ${
            logoState === "black" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* NAVIGATION */}
      <nav
        className={`flex gap-x-[22px] text-lg font-medium transform transition-all duration-500 ${
          showNav && introDone
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-7 pointer-events-none"
        }`}
        style={{ color: logoState === "black" ? "#000" : "#fff" }}
      >
        {[
          { id: "about", label: "About" },
          { id: "products", label: "Products" },
          { id: "technologies", label: "Technology" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <Link
            key={id}
            to={isHome ? "" : "/"}
            onClick={() => {
              if (isHome) scrollTo(id);
            }}
          >
            <div
              className={`navlink flex flex-col h-[25px] overflow-hidden transition-all duration-100 ${
                activeSection === id ? "opacity-100" : "opacity-100 hover:opacity-100"
              }`}
            >
              <span
  style={{
    // ACTIVE label (top) full white
    color:
      activeSection === id
        ? "#ffffff"
        : (
            logoState === "black"
              ? "#000000"   // inactive top label when black theme
              : "#ffffff30"   // inactive top label when white theme (gray)
          ),
    transition: "all 0.25s ease"
  }}
>
  {label}
</span>

<span
  style={{
    // LOWER label (solid)
    color: logoState === "black" ? "#000000" : "#ffffff",
    transition: "all 0.25s ease"
  }}
>
  {label}
</span>

            </div>
          </Link>
        ))}
      </nav>
    </header>
  );
};
