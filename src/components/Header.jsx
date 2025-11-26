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
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Lock/unlock scroll when mobile menu opens
  useEffect(() => {
    if (mobileMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => (document.body.style.overflow = "auto");
  }, [mobileMenu]);

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
        className={`
          fixed top-0 left-0 w-full flex justify-between items-center pt-[20px]
          px-6 lg:px-[120px] z-[2000]
          transition-all duration-300
          bg-black md:bg-transparent
          ${showHeader ? "top-0" : `-top-[${headerHeight}px]`}
        `}
      >
        <div className="logo relative w-[110px] h-[70px]">
          <img src="/logos/anvi_white.png" className="absolute inset-0 object-contain" />
        </div>

        {/* DESKTOP NAV */}
        <nav
          className={`
            hidden md:flex gap-x-[22px] overflow-hidden text-lg font-medium transition-all duration-500
            ${showNav ? "animate-fadeDown opacity-100" : "opacity-0 -translate-y-7"}
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
                <span className={`${isActive ? "text-white" : "text-[#888888]"}`}>
                  {label}
                </span>
                <span className="text-white">{label}</span>
              </div>
            );
          })}
        </nav>

        {/* HAMBURGER / X */}
        <button
          className="md:hidden text-white z-[3001]"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* MOBILE DROPDOWN — NO GAP (dynamic top) */}
      <div
        style={{ top: headerHeight }}
        className={`
          fixed left-0 w-full bg-black  z-[1500]
          overflow-hidden transition-all duration-300
          ${mobileMenu ? "max-h-[40vh] py-6" : "max-h-0 py-0"}
          md:hidden
        `}
      >
        <div className="flex flex-col items-center gap-5 text-xl text-[#888888] px-6">
          {navLinks.map(({ id, label }) => (
            <div
              key={id}
              onClick={() => goToSection(id)}
              className="cursor-pointer"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
