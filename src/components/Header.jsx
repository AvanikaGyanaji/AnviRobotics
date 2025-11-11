import { Link } from "react-router-dom";
import { Survillance } from "../pages/Survillance";

export const Header=()=>{
    return(<header className="header fixed top-[56px] w-full flex justify-end items-center px-[90px] z-[100]">
      {/* White Logo (initial) */}
      <img
        src="/logos/anvi_white.png"
        className="logo-white w-[110px] h-[70px] object-contain absolute left-[120px]"
        alt="White Logo"
      />

      {/* Black Logo (appears after bg changes) */}
      <img
        src="/logos/anvi_black.png"
        className="logo-black w-[110px] h-[70px] object-contain absolute left-[120px]"
        alt="Black Logo"
      />

      {/* Navigation */}
      <nav className="nav flex gap-x-[22px] text-lg">
       <Link onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="navlink">About</Link>
       <Link to="/survillance" className>Products</Link>
       <Link onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className>Technologies</Link>
       <Link onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className>Contact</Link>

      </nav>
    </header>
 );
}