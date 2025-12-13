import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("herosection");
  const [showNav, setShowNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
  }, []);

  // Delay navbar reveal animation
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("headerAnimationDone");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowNav(true);
        sessionStorage.setItem("headerAnimationDone", "true");
      }, 3800);
      return () => clearTimeout(timer);
    } else setShowNav(true);
  }, []);

  // Highlight override for surveillance page
  useEffect(() => {
    if (location.pathname === "/surveillance") {
      setActiveSection("products");
    }
  }, [location.pathname]);

  // Scroll spy on home page
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
        if (position >= top && position <= bottom) current = sec.id;
      });
      if (current !== activeSection) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, activeSection]);

  // Navigate to section
  const goToSection = (id) => {
    setMobileMenu(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Header hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 50) setShowHeader(false); // hide down
      else setShowHeader(true); // show up
      setLastScrollY(currentScroll <= 0 ? 0 : currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "technology", label: "Technology" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
  ref={headerRef}
  style={{ top: showHeader ? 0 : -headerHeight }}
  className={`
    fixed left-0 w-full flex justify-between items-center py-[10px]
    px-6 md:px-[80px] lg:px-[120px] z-[2000]
    transition-all duration-300
    bg-black md:bg-transparent
  `}
>

        <div className="logo relative w-[150px] h-[70px] flex items-center">
          <img src="/logos/anvi_robotics_White.svg" className=" inset-0 object-contain" />
        </div>

        {/* DESKTOP NAV */}
        <nav
          className={`
            hidden md:flex gap-x-[22px] overflow-hidden text-lg font-medium transition-all duration-500
            ${showNav ? "animate-fadeDown opacity-100 translate-y-0" : "opacity-0 -translate-y-7"}
          `}
        >
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <div
                key={id}
                onClick={() => goToSection(id)}
                className={`
                  flex flex-col h-[35px] gap-y-[5px] cursor-pointer transition-transform duration-300
                  ${isActive ? "translate-y-0" : "hover:-translate-y-[35px]"}
                `}
              >
                <span className={`${isActive ? "text-white" : "text-[#888888]"}`}>{label}</span>
                <span className="text-white">{label}</span>
              </div>
            );
          })}
        </nav>

        {/* HAMBURGER / X */}
        <button className="md:hidden text-white z-[3001]" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* MOBILE DROPDOWN */}
      <div
        style={{ top: headerHeight }}
        className={`fixed left-0 w-full bg-black z-[1500] overflow-hidden transition-all duration-300
          ${mobileMenu ? "max-h-[40vh] py-6" : "max-h-0 py-0"} md:hidden`}
      >
        <div className="flex flex-col items-center gap-5 text-xl text-[#888888] px-6">
          {navLinks.map(({ id, label }) => (
            <div key={id} onClick={() => goToSection(id)} className="cursor-pointer">
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { Menu, X } from "lucide-react";

// export const Header = () => {
//   const [activeSection, setActiveSection] = useState("herosection");
//   const [showNav, setShowNav] = useState(false);
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [headerHeight, setHeaderHeight] = useState(0);
  
//   // NEW STATE: Tracks if header is over a white background
//   const [isLightMode, setIsLightMode] = useState(false);

//   const headerRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
//   }, []);

//   // Delay navbar reveal animation
//   useEffect(() => {
//     const alreadyShown = sessionStorage.getItem("headerAnimationDone");
//     if (!alreadyShown) {
//       const timer = setTimeout(() => {
//         setShowNav(true);
//         sessionStorage.setItem("headerAnimationDone", "true");
//       }, 3800);
//       return () => clearTimeout(timer);
//     } else setShowNav(true);
//   }, []);

//   // Highlight override for surveillance page
//   useEffect(() => {
//     if (location.pathname === "/surveillance") {
//       setActiveSection("products");
//     }
//   }, [location.pathname]);

//   // Combined Scroll Logic (Spy Sections + Detect Background Color)
//   useEffect(() => {
//     if (location.pathname !== "/") return;

//     const sections = Array.from(document.querySelectorAll("section[id]"));
//     // Select all elements that act as white backgrounds
//     const lightTriggers = Array.from(document.querySelectorAll(".light-bg-trigger")); 

//     const onScroll = () => {
//       const currentScroll = window.scrollY;
//       const position = currentScroll + window.innerHeight / 2;
      
//       // 1. Logic for Active Section Highlight
//       let current = activeSection;
//       sections.forEach((sec) => {
//         const rect = sec.getBoundingClientRect();
//         const top = rect.top + window.scrollY;
//         const bottom = top + sec.offsetHeight;
//         if (position >= top && position <= bottom) current = sec.id;
//       });
//       if (current !== activeSection) setActiveSection(current);

//       // 2. Logic for Header Hide/Show
//       if (currentScroll > lastScrollY && currentScroll > 50) setShowHeader(false);
//       else setShowHeader(true);
//       setLastScrollY(currentScroll <= 0 ? 0 : currentScroll);

//       // 3. Logic for Light/Dark Mode (New)
//       let foundLight = false;
//       // We check if the header (approx top 50px) is overlapping a light section
//       lightTriggers.forEach((trigger) => {
//         const rect = trigger.getBoundingClientRect();
//         // If the top of the section is above the header text area
//         // AND the bottom of the section is still below the header
//         if (rect.top <= 40 && rect.bottom >= 40) {
//           foundLight = true;
//         }
//       });
//       setIsLightMode(foundLight);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [location.pathname, activeSection, lastScrollY]);

//   const goToSection = (id) => {
//     setMobileMenu(false);
//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//       }, 150);
//     } else {
//       document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const navLinks = [
//     { id: "about", label: "About" },
//     { id: "products", label: "Products" },
//     { id: "technology", label: "Technology" },
//     { id: "contact", label: "Contact" },
//   ];

//   // Helper colors
//   const textColor = isLightMode ? "text-black" : "text-white";
//   const dimColor = isLightMode ? "text-gray-500" : "text-[#888888]";

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         ref={headerRef}
//         style={{ top: showHeader ? 0 : -headerHeight }}
//         className={`
//           fixed left-0 w-full flex justify-between items-center py-[10px]
//           px-6 lg:px-[120px] z-[2000]
//           transition-all duration-300
//           bg-transparent 
//         `}
//         // Note: Removed bg-black from mobile view here to keep it clean, 
//         // or add conditional bg if needed.
//       >

//         <div className="logo relative w-[110px] h-[70px]">
//           {/* Swap Logo based on Background */}
//           <img 
//             src={isLightMode ? "/logos/anvi_black.png" : "/logos/anvi_white.png"} 
//             className="absolute inset-0 object-contain transition-opacity duration-300"
//             alt="Logo"
//           />
//         </div>

//         {/* DESKTOP NAV */}
//         <nav
//           className={`
//             hidden md:flex gap-x-[22px] overflow-hidden text-lg font-medium transition-all duration-500
//             ${showNav ? "animate-fadeDown opacity-100 translate-y-0" : "opacity-0 -translate-y-7"}
//           `}
//         >
//           {navLinks.map(({ id, label }) => {
//             const isActive = activeSection === id;
//             return (
//               <div
//                 key={id}
//                 onClick={() => goToSection(id)}
//                 className={`
//                   flex flex-col h-[35px] gap-y-[5px] cursor-pointer transition-transform duration-300
//                   ${isActive ? "translate-y-0" : "hover:-translate-y-[35px]"}
//                 `}
//               >
//                 {/* Top Text (Visible normally) */}
//                 <span 
//                   className={`transition-colors duration-300 ${isActive ? textColor : dimColor}`}
//                 >
//                   {label}
//                 </span>
                
//                 {/* Bottom Text (Visible on Hover) */}
//                 <span className={`transition-colors duration-300 ${textColor}`}>
//                   {label}
//                 </span>
//               </div>
//             );
//           })}
//         </nav>

//         {/* HAMBURGER / X */}
//         <button 
//           className={`md:hidden z-[3001] transition-colors duration-300 ${mobileMenu ? "text-white" : textColor}`} 
//           onClick={() => setMobileMenu(!mobileMenu)}
//         >
//           {mobileMenu ? <X size={32} /> : <Menu size={32} />}
//         </button>
//       </header>

//       {/* MOBILE DROPDOWN */}
//       <div
//         style={{ top: 0 }} // Changed to cover full screen or keep top offset if preferred
//         className={`fixed inset-0 bg-black z-[1500] flex flex-col justify-center items-center transition-all duration-300
//           ${mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} md:hidden`}
//       >
//         <div className="flex flex-col items-center gap-8 text-2xl text-[#888888]">
//           {navLinks.map(({ id, label }) => (
//             <div key={id} onClick={() => goToSection(id)} className="cursor-pointer hover:text-white transition-colors">
//               {label}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };