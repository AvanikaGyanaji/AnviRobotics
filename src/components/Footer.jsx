import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[350px] bg-[#00000060]">
      <div className="flex flex-col justify-center items-center pt-[10px] mx-auto">
        
        <img className="max-w-[110px] max-h-[80px]" src="/logos/anvi_white.png" />

        {/* ✨ Animated Nav Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex  md:flex-row flex-col h-[24px] overflow-hidden gap-x-[80px] mt-[16px] text-[18px] font-[DM Sans]"
        >

          <div onClick={() => scrollTo("about")} className="hover:translate-y-[-28px] transition-transform duration-500 cursor-pointer">
            <p className="text-[#888888]">About</p>
            <p className="text-[#ffffff]">About</p>
          </div>

          <div onClick={() => scrollTo("products")} className="hover:translate-y-[-28px] transition-transform duration-500 cursor-pointer">
            <p className="text-[#888888]">Products</p>
            <p className="text-[#ffffff]">Products</p>
          </div>

          <div onClick={() => scrollTo("technology")} className="hover:translate-y-[-28px] transition-transform duration-500 cursor-pointer">
            <p className="text-[#888888]">Technology</p>
            <p className="text-[#ffffff]">Technology</p>
          </div>

          <div onClick={() => scrollTo("contact")} className="hover:translate-y-[-28px] transition-transform duration-500 cursor-pointer">
            <p className="text-[#888888]">Contact</p>
            <p className="text-[#ffffff]">Contact</p>
          </div>

        </motion.div>

        <div className="flex gap-x-[25px] mx-auto justify-center mt-[30px]">
         <a href="https://www.instagram.com/" target="_blank">   <img className="w-[60px] h-[15px]" src="/images/Instagram.png"/></a>
         <a href="https://www.linkedin.com/company/anvirobotics/" target="_blank">   <img className="w-[60px] h-[15px]" src="/images/Linkedin.png"/></a>

        </div>


        <div className="flex justify-center items-center gap-x-[10px] mx-auto mt-[30px] text-white">
            <MapPin/>
            <a href="https://maps.app.goo.gl/AmueWvvHFZcgitgE9" target="_blank" className="text-[#ffffff60]">Anvi Robotics,1st Floor, Modern Profound tech Park,<br/> White Field Rd, Kondapur, Whitefields, Madhapur, <br/>Hyderabad, Telangana 500084</a>
        </div>

        <div className="mt-[30px] border-t-[1px] border-[#ffffff60] text-white flex justify-between w-[100%] px-[120px] pt-[5px]">
           <p className="text-[#ffffff72]">©2025 anvi.co</p>
           <a className="" href="mailto:info@anvi.co"   target="_blank">info@anvi.co</a>
           <p className="text-[#ffffff72]">Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};
