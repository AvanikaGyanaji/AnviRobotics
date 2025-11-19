import { Clock, Mail, MapPinned } from "lucide-react"


export const ContactUs =()=>{
    return(
    <>
        <section id="contact" className="h-screen w-[100%] ">
            <div className="flex flex-col gap-y-[10px] pt-[120px]">
                <div className=" flex justify-center">
                    <h1 className="text-[48px] text-white"> Contact Us</h1>
                </div>
                <div className="flex gap-[10%]  w-[100%]">
                    <div className="flex flex-col text-white w-[45%] ml-[10%] mt-[5%]">
                        <p className="mb-[60px]">We are committed to processing the information<br/> in order to contact you and talk about your<br/> project. </p>
                        <a href="" className="flex items-center pb-[30px]" ><span className="inline-block pr-[40px]"><Mail /></span>info@anvi.co</a>
                        <a href="" className="flex items-start pb-[30px]" ><span className="inline-block pr-[40px]"><MapPinned /></span>Anvi Robotics,1st Floor, Modern Profound <br/>tech Park, White Field Rd, Kondapur,<br/> Whitefields, Madhapur, Hyderabad,<br/> Telangana 500084</a>
                        <a href="" className="flex items-center pb-[30px]" ><span className="inline-block pr-[40px]"><Clock/></span>Working Hours: Mon–Sat, 9:30 AM – 6:30 PM</a>

                    </div>
                    <div>
                        

                    </div>

                </div>
            </div>
        </section>
    </>
    )
}