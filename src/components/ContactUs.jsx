import { Clock, Mail, MapPinned } from "lucide-react"
import { Form } from "./Form"

import React from "react"
export const ContactUs =()=>{
    return(
    <>
        <section id="contact" className="min-h-screen pb-[100px] w-[100%] ">
            <div className="flex flex-col gap-y-[10px] pt-[120px]">
                
                <div className="flex md:flex-row flex-col gap-[2%] lg:text-[20px]  w-[100%] px-[8%] flex-wrap">
                    <div className="flex flex-col text-white md:w-[45%] w-[80%] mx-auto mt-[5%]">
                         <h1 className="text-[48px] mb-[10%] font-[Arial]  text-white"> Contact Us</h1>
                        <p className="mb-[60px]">We are committed to processing the information in order to contact you and talk about your project. </p>
                        <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@anvi.co" target="_blank"  rel="noopener noreferrer"  className="flex items-center pb-[30px]" ><span className="inline-block pr-[40px]"><Mail /></span>info@anvi.co</a>
                        <a href="https://maps.app.goo.gl/jHhJkpg8bZybpuzz7" target="_blank" className="flex items-start pb-[30px]" ><span className="inline-block pr-[40px]"><MapPinned /></span>Anvi Robotics,1st Floor, Modern Profound tech Park, White Field Rd, Kondapur, Whitefields, Madhapur, Hyderabad, Telangana 500084</a>
                        <p  className="flex items-center pb-[30px]" ><span className="inline-block pr-[40px]"><Clock/></span>Working Hours: Mon–Sat, 9:30 AM – 6:30 PM</p>

                    </div>
                    <div className="md:w-[45%] w-[100%] mx-auto mt-[5%]">
                       <Form/>
                    </div>

                </div>
            </div>
        </section>
    </>
    )
}