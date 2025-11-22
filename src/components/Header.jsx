
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
        {/* Top text */}
        <span className={`${isActive ? "text-white" : "text-[#888888]"}`}>
          {label}
        </span>

        {/* Bottom text — Always White */}
        <span className="text-white">{label}</span>
      </div>
    );
  })}
</nav>

    </header>
  );
};
