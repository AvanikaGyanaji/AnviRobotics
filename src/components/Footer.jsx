import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FooterPagesLinks = [
  { label: "About", link: "about" },
  { label: "Products", link: "products" },
  { label: "Technology", link: "technology" },
  { label: "Contact", link: "contact" },
];

export const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#00000060] pt-10 pb-8">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-12">
        {/* ---------- GRID LAYOUT ---------- */}
        <div className="grid grid-cols-2 md:grid-cols-1 place-items-center gap-10 text-white">
          {/* ---------- COLUMN 1: LOGO + SOCIAL ---------- */}
          <div className="flex flex-col justify-center items-center md:items-start gap-4">
            <img
              className="max-w-[200px] max-h-[80px] self-center"
              src="/logos/anvi_white.png"
            />

            {/* SOCIAL ICONS */}
            <div className="flex justify-center align-middle gap-6 mt-4">
              <a href="https://www.instagram.com/anvi_robotics" target="_blank">
                <img
                  className="w-full max-w-[80px] object-contain object-center"
                  src="/images/Instagram.png"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/anvirobotics/"
                target="_blank"
              >
                <img
                  className="w-full max-w-[60px] object-contain object-center"
                  src="/images/Linkedin.png"
                />
              </a>
            </div>
          </div>

          {/* ---------- COLUMN 2: QUICK LINKS ---------- */}
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
                onClick={() => scrollTo(each.link)}
                className="group h-[24px] overflow-hidden cursor-pointer"
              >
                <div className="transition-transform duration-500 group-hover:-translate-y-[24px]">
                  <p className="text-[#888888]">{each.label}</p>
                  <p className="text-[#fff]">{each.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ---------- COLUMN 3: ADDRESS ---------- */}
          <div className="flex flex-col col-span-full items-center md:items-center gap-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-start gap-3">
              <MapPin className="w-[20px]" />

              <a
                href="https://maps.app.goo.gl/AmueWvvHFZcgitgE9"
                target="_blank"
                className="text-[#ffffffb5] leading-6 cursor-pointer"
              >
                Anvi Robotics, 1st Floor, Modern Profound Tech Park,
                <br />
                White Field Rd, Kondapur, Whitefields, Madhapur,
                <br />
                Hyderabad, Telangana 500084
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex justify-center md:justify-start items-start gap-3">
              <Mail className="w-[18px]" />
              <a
                href="mailto:info@anvi.co"
                target="_blank"
                className="text-[#ffffff] no-underline cursor-pointer hover:underline hover:underline-offset-2"
              >
                info@anvi.co
              </a>
            </div>
          </div>
        </div>

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="w-full border-t border-[#ffffff60] pt-4 text-white text-sm flex flex-row justify-between text-center md:text-left gap-3">
          <p className="text-[#ffffff72]">© 2025 anvi.co</p>

          {/* <a
            className="hover:underline"
            href="mailto:info@anvi.co"
            target="_blank"
          >
            info@anvi.co
          </a> */}

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
