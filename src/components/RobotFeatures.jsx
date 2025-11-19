import React from "react";
import { Icon } from "@iconify/react";

const RobotFeatures = ({ section4Ref, section4Scale = 1, section4Opacity = 1 }) => {
  return (
    <div
      ref={section4Ref}
      className="min-h-screen relative bg-black transition-all duration-300 ease-out"
      style={{ transform: `scale(${section4Scale})`, opacity: section4Opacity }}
    >
      <div className="w-full px-4 sm:px-8 md:px-[60px] py-8 sm:py-12 flex flex-col items-center justify-center min-h-screen box-border">
        <h2 className="text-[24px] sm:text-[32px] md:text-[46px] font-semibold text-white mb-8 text-center">
          Our Robot Features
        </h2>

        {/* SM / MD Layout: single grid for all 8 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full lg:hidden">
          {[
            { icon: <Icon icon="mdi:cctv" width={48} />, text: "24/7 Autonomous Patrols" },
            { icon: <Icon icon="si:alert-fill" width={48} />, text: "AI-Powered Threat Detection" },
            { icon: <Icon icon="ic:baseline-360" width={48} />, text: "360° Vision & HD Cameras" },
            { icon: <Icon icon="mdi:eye-circle-outline" width={48} />, text: "Night Vision & Thermal Imaging" },
            { icon: <Icon icon="mdi:radar" width={48} />, text: "Smart Navigation (LiDAR + SLAM)" },
            { icon: <Icon icon="material-symbols:communication" width={52} />, text: "Two-Way Communication" },
            { icon: <Icon icon="tabler:temperature-celsius" width={48} />, text: "All-Weather Durability" },
            { icon: <Icon icon="mdi:battery-clock" width={48} />, text: "Long Battery Life + Auto Charging" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col text-[#FFFFFF66] hover:text-white items-center justify-center bg-white/8 px-4 sm:px-2 md:px-4 min-h-[160px] rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <p className="text-[12px] sm:text-[14px] md:text-[16px] text-center mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* LG+ Layout: first 5 and last 3 split into 2 grids */}
        <div className="hidden lg:block w-full">
          {/* First Grid */}
          <div className="grid grid-cols-5 gap-8 mb-6 w-full">
            {[
              { icon: <Icon icon="mdi:cctv" width={48} />, text: "24/7 Autonomous Patrols" },
              { icon: <Icon icon="si:alert-fill" width={48} />, text: "AI-Powered Threat Detection" },
              { icon: <Icon icon="ic:baseline-360" width={48} />, text: "360° Vision & HD Cameras" },
              { icon: <Icon icon="mdi:eye-circle-outline" width={48} />, text: "Night Vision & Thermal Imaging" },
              { icon: <Icon icon="mdi:radar" width={48} />, text: "Smart Navigation (LiDAR + SLAM)" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col text-[#FFFFFF66] hover:text-white items-center justify-center bg-white/8 px-8 min-h-[160px] rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {item.icon}
                <p className="text-[16px] text-center mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Second Grid */}
          <div className="grid grid-cols-3 gap-8 w-full">
            {[
              { icon: <Icon icon="material-symbols:communication" width={52} />, text: "Two-Way Communication" },
              { icon: <Icon icon="tabler:temperature-celsius" width={48} />, text: "All-Weather Durability" },
              { icon: <Icon icon="mdi:battery-clock" width={48} />, text: "Long Battery Life + Auto Charging" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col text-[#FFFFFF66] hover:text-white items-center justify-center bg-white/8 px-8 min-h-[160px] rounded-xl hover:shadow-lg transition-all duration-300"
              >
                {item.icon}
                <p className="text-[16px] text-center mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotFeatures;
