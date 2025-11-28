// import { Clock, Mail, MapPinned } from "lucide-react"
// import { Form } from "./Form"

// import React from "react"
// export const ContactUs =()=>{
//     return(
//     <>
//         <section id="contact" className="min-h-screen pb-[100px] w-[100%] ">
//             <div className="flex flex-col gap-y-[10px] pt-[120px]">
                
//                 <div className="flex md:flex-row flex-col gap-[2%] lg:text-[20px]  w-[100%] px-[8%] flex-wrap">
//                     <div className="flex flex-col text-white md:w-[45%] w-[80%] mx-auto mt-[5%]">
//                          <h1 className="text-[48px] mb-[10%] font-[Arial]  text-white"> Contact Us</h1>
//                         <p className="mb-[60px]">We are committed to processing the information in order to contact you and talk about your project. </p>
//                         <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@anvi.co" target="_blank"  rel="noopener noreferrer"  className="flex items-center pb-[30px]" ><span className="inline-block pr-[40px]"><Mail /></span>info@anvi.co</a>
//                         <a href="https://maps.app.goo.gl/jHhJkpg8bZybpuzz7" target="_blank" className="flex items-start pb-[30px]" ><span className="inline-block pr-[40px]"><MapPinned /></span>Anvi Robotics,1st Floor, Modern Profound tech Park, White Field Rd, Kondapur, Whitefields, Madhapur, Hyderabad, Telangana 500084</a>
//                         <p  className="flex items-center pb-[30px]" ><span className="inline-block pr-[40px]"><Clock/></span>Working Hours: Mon–Sat, 9:30 AM – 6:30 PM</p>

//                     </div>
//                     <div className="md:w-[45%] w-[100%] mx-auto mt-[5%]">
//                        <Form/>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     </>
//     )
// }


import { Clock, Mail, MapPinned } from "lucide-react";
import { Form } from "./Form";
import React from "react";

export const ContactUs = () => {
  return (
    <>
      <section
        id="contact"
        className="min-h-auto w-full bg-[#eff0f0] py-[120px] flex justify-center light-bg-trigger"
      >
        {/* OUTER CARD WRAPPER */}
        <div
          className="
            w-[96%]
            md:w-[92%] 
            max-w[1400px] 
            bg-black 
            rounded-[28px] 
            px-[20px]
            p-[20px]
            md:p-[50px] 
            relative 
            overflow-hidden 
          "
        >
          {/* INNER GRADIENT (BOTTOM-CENTER) */}
          <div
            className="
              absolute 
              bottom-0 
              left-1/2 
              -translate-x-1/2
              w-[600px] 
              h-[400px] 
              pointer-events-none
              opacity-60
              blur-[120px]
              "
            style={{
              background: `radial-gradient(
                ellipse at center,
                rgba(0, 151, 178, 0.45) 0%,
                rgba(51, 188, 209, 0.35) 25%,
                rgba(102, 211, 226, 0.22) 50%,
                rgba(0, 90, 106, 0.18) 70%,
                rgba(0, 0, 0, 1) 100%
              )`,
            }}
          />

          {/* MAIN CONTENT */}
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[50px] w-full relative z-[10]">
            
            {/* LEFT INFO */}
            <div className="text-white md:w-[50%] w-full">
              <h1 className="about-heading md:mb-[35px] mb-[10px] font-[Arial] text-white">
                Contact Us
              </h1>

              <p className="mb-[10px] md:mb-[40px] contact-para leading-[30px]">
                We are committed to processing the information in order to
                contact you and talk about your project.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@anvi.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pb-[10px] md:pb-[30px]  contact-para"
              >
                <span className="pr-[20px]">
                  <Mail />
                </span>
                info@anvi.co
              </a>

              <a
                href="https://maps.app.goo.gl/jHhJkpg8bZybpuzz7"
                target="_blank"
                className="flex items-start  pb-[10px] md:pb-[30px] leading-[28px] contact-para"
              >
                <span className="pr-[20px]">
                  <MapPinned />
                </span>
                Anvi Robotics, 1st Floor, Modern Profound Tech Park, White Field Road,  
                Kondapur, Madhapur, Hyderabad, Telangana 500084
              </a>

              <p className="flex items-center  pb-[10px] md:pb-[30px] contact-para">
                <span className="pr-[20px]">
                  <Clock />
                </span>
                Working Hours: Mon–Fri, 9:30 AM – 6:30 PM
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="md:w-[50%] w-full">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
