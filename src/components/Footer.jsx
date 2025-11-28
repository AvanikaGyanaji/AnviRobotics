import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const FooterPagesLinks = [
  { label: "About", link: "about" },
  { label: "Products", link: "products" },
  { label: "Technology", link: "technology" },
  { label: "Contact", link: "contact" },
];

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goFooterSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Reset scroll to TOP instantly before smooth scroll
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);

      // Smooth scroll to section
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);

    } else {
      // Already on homepage
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#00000060] pt-10 ">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12">
        
        <div className="grid grid-cols-2 md:grid-cols-1 place-items-center gap-10 text-white">
          
          {/* Column 1 */}
          <div className="flex flex-col justify-center items-center md:items-start gap-4">
            <img
              className="max-w-[200px] max-h-[80px] self-center"
              src="/logos/anvi_white.png"
            />

            <div className="flex justify-center align-middle gap-6 mt-4">
              <a href="https://www.instagram.com/anvi_robotics" target="_blank">
                <img className="w-full max-w-[80px]" src="/images/Instagram.png" />
              </a>

              <a href="https://www.linkedin.com/company/anvirobotics/" target="_blank">
                <img className="w-full max-w-[60px]" src="/images/Linkedin.png" />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid max-md:grid-cols-1 md:grid-cols-4 gap-5 text-center md:text-left place-items-center md:place-items-start"
          >
            {FooterPagesLinks.map((each) => (
              <div
                key={each.label}
                onClick={() => goFooterSection(each.link)}
                className="group h-[24px] overflow-hidden cursor-pointer"
              >
                <div className="transition-transform duration-500 group-hover:-translate-y-[24px]">
                  <p className="text-[#888888]">{each.label}</p>
                  <p className="text-[#fff]">{each.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Column 3 */}
          <div className="flex flex-col col-span-full items-center md:items-center gap-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-start gap-3 text-[10px] md:text-[14px]">
              <MapPin className="w-[20px]" />
              <a
                href="https://maps.app.goo.gl/AmueWvvHFZcgitgE9"
                target="_blank"
                className="text-[#ffffffb5] leading-6"
              >
                Anvi Robotics, 1st Floor, Modern Profound Tech Park,
                <br />
                White Field Rd, Kondapur, Whitefields, Madhapur,
                <br />
                Hyderabad, Telangana 500084
              </a>
            </div>

            <div className="flex justify-center md:justify-start items-start gap-3 text-[10px] md:text-[14px]">
              <Mail className="w-[18px]" />
              <a
                href="mailto:info@anvi.co"
                target="_blank"
                className="text-[#ffffff] no-underline hover:underline hover:underline-offset-2"
              >
                info@anvi.co
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-[#ffffff60] py-[10px] text-white text-sm flex flex-row justify-between md:px-[15%] px-[5%] text-center md:text-left gap-3">
          <p className="text-[#ffffff72]">© 2025 anvi.co</p>

          <Link
            to={""}
            className="text-[#ffffff72] cursor-pointer px-3 md:px-6 underline underline-offset-2 hover:underline-offset-4"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
