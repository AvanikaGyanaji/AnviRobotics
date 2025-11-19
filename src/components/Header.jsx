// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// export const Header = () => {
//   const [activeSection, setActiveSection] = useState("herosection");
//   const [showNav, setShowNav] = useState(false);
//   const [showIntroLogos, setShowIntroLogos] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowIntroLogos(false), 4500);
//     setTimeout(() => setShowNav(true), 3800);
//     return () => clearTimeout(timer);
//   }, []);

//   // ⭐ SCROLL-SPY: pick the MOST visible section
//   // ⭐ Section becomes active only when 80% in viewport
// useEffect(() => {
//   const sections = Array.from(document.querySelectorAll("section[id]"));

//   const onScroll = () => {
//     const scrollPos = window.scrollY + window.innerHeight / 2;

//     let current = activeSection;

//     sections.forEach((sec) => {
//       const rect = sec.getBoundingClientRect();
//       const top = rect.top + window.scrollY;
//       const bottom = top + sec.offsetHeight;

//       if (scrollPos >= top && scrollPos <= bottom) {
//         current = sec.id;
//       }
//     });

//     if (current !== activeSection) {
//       setActiveSection(current);
//       console.log("ACTIVE:", current);
//     }
//   };

//   window.addEventListener("scroll", onScroll);
//   return () => window.removeEventListener("scroll", onScroll);
// }, [activeSection]);


//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="header fixed top-[36px] w-full flex justify-between items-center px-[120px] z-[2000] transition-all duration-300">
      
//       {/* Intro Logo
//       {showIntroLogos && (
//         <div className="absolute left-[90px] w-[110px] h-[70px] pointer-events-none">
//           <img src="/logos/anvi_white.png" className="logo-white" alt="Intro White" />
//         </div>
//       )} */}

//       {/* Main Logo */}
//       <div
//         className={`logo relative w-[110px] h-[70px] transition-opacity duration-700 
//         ` }
//       >
//         <img
//           src="/logos/anvi_white.png"
//           className="absolute inset-0 w-[110px] h-[70px] object-contain"
//           alt="White Logo"
//         />
//       </div>

//       {/* Navigation */}
//       <nav
//         className={`flex gap-x-[22px] text-lg font-medium transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
//           showNav
//             ? "animate-fadeDown opacity-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 -translate-y-7 pointer-events-none"
//         }`}
//         style={{ color: "#888888" }}
//       >
//         {[
//           { id: "about", label: "About" },
//           { id: "products", label: "Products" },
//           { id: "technology", label: "Technology" }, // ⭐ FIXED ID
//           { id: "contact", label: "Contact" },
//         ].map(({ id, label }) => (
//           <Link key={id} onClick={() => scrollTo(id)}>
//             <div
//               className={`navlink flex flex-col h-[25px] overflow-hidden transition-all duration-100 ${
//                 activeSection === id ? "active" : "opacity-80 hover:opacity-100"
//               }`}
//             >
//               {/* Top text */}
//               <span
//                 style={{
//                   color: activeSection === id ? "#ffffff" : "#888888",
//                 }}
//               >
//                 {label}
//               </span>

//               {/* Bottom text (for slide animation) */}
//               <span style={{ color: "#ffffff" }}>{label}</span>
//             </div>
//           </Link>
//         ))}
//       </nav>
//     </header>
//   );
// };

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("herosection");
  const [showNav, setShowNav] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 3800);
    return () => clearTimeout(timer);
  }, []);

  // ⭐ When on surveillance page → freeze highlight to products
  useEffect(() => {
    if (location.pathname === "/survillance") {
      setActiveSection("products");
    }
  }, [location.pathname]);

  // ⭐ Scroll spy only works on home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = Array.from(document.querySelectorAll("section[id]"));

    const onScroll = () => {
      const position = window.scrollY + window.innerHeight / 2;

      let current = activeSection;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + sec.offsetHeight;

        if (position >= top && position <= bottom) {
          current = sec.id;
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, activeSection]);

  // ⭐ UNIVERSAL navigation handler (works from home + surveillance)
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      // wait for home to load DOM
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);

    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header fixed top-[36px] w-full flex justify-between items-center px-[120px] z-[2000] transition-all">
      
      <div className="logo relative w-[110px] h-[70px]">
        <img src="/logos/anvi_white.png" className="absolute inset-0 object-contain" />
      </div>

      {/* NAV */}
      <nav
        className={`flex gap-x-[22px] text-lg font-medium transition-all duration-500 ${
          showNav
            ? "animate-fadeDown opacity-100 translate-y-0"
            : "opacity-0 -translate-y-7"
        }`}
      >
        {/* About */}
        <div onClick={() => goToSection("about")} className="cursor-pointer">
          <span style={{ color: activeSection === "about" ? "#fff" : "#888" }}>
            About
          </span>
        </div>

        {/* Products (ONLY A SECTION → NO LINK, NO ROUTE) */}
        <div onClick={() => goToSection("products")} className="cursor-pointer">
          <span style={{ color: activeSection === "products" ? "#fff" : "#888" }}>
            Products
          </span>
        </div>

        {/* Technology */}
        <div onClick={() => goToSection("technology")} className="cursor-pointer">
          <span style={{ color: activeSection === "technology" ? "#fff" : "#888" }}>
            Technology
          </span>
        </div>

        {/* Contact */}
        <div onClick={() => goToSection("contact")} className="cursor-pointer">
          <span style={{ color: activeSection === "contact" ? "#fff" : "#888" }}>
            Contact
          </span>
        </div>
      </nav>
    </header>
  );
};
