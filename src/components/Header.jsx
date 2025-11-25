import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("herosection");
  const [showNav, setShowNav] = useState(false);

  //Hide/show header on scroll
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Delay navbar reveal animation
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("headerAnimationDone");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowNav(true);
        sessionStorage.setItem("headerAnimationDone", "true");
      }, 3800);

      return () => clearTimeout(timer);
    } else {
      setShowNav(true); // immediately show nav
    }
  }, []);

  // ⭐ When on surveillance page → freeze highlight to Products
  useEffect(() => {
    if (location.pathname === "/survillance") {
      setActiveSection("products");
    }
  }, [location.pathname]);

  // ⭐ Scroll spy only on home page
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

      if (current !== activeSection) setActiveSection(current);
    };

  

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname, activeSection]);

  // ⭐ UNIVERSAL Go to Section
  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ⭐ NEW: Header hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
        setShowHeader(false); // scrolling down → hide
      } else {
        setShowHeader(true); // scrolling up → show
      }

      setLastScrollY(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        header fixed left-0 w-full flex justify-between items-center px-[120px] z-[2000]
        transition-transform duration-300
        ${showHeader ? "translate-y-[36px]" : "-translate-y-full"}
      `}
    >
      <div className="logo relative w-[110px] h-[70px]">
        <img src="/logos/anvi_white.png" className="absolute inset-0 object-contain" />
      </div>

      {/* NAV */}
      <nav
        className={`flex gap-x-[22px] overflow-hidden text-lg font-medium transition-all duration-500 ${
          showNav ? "animate-fadeDown opacity-100 translate-y-0" : "opacity-0 -translate-y-7"
        }`}
      >
        {[
          { id: "about", label: "About" },
          { id: "products", label: "Products" },
          { id: "technology", label: "Technology" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => {
          const isActive = activeSection === id;

          return (
            <div
              key={id}
              onClick={() => goToSection(id)}
              className={`flex flex-col h-[35px] gap-y-[5px] cursor-pointer transition-transform duration-300 ${
                isActive ? "translate-y-0" : "hover:-translate-y-[35px]"
              }`}
            >
              <span className={`${isActive ? "text-white" : "text-[#888888]"}`}>
                {label}
              </span>

              <span className="text-white">{label}</span>
            </div>
          );
        })}
      </nav>
    </header>
  );
};
