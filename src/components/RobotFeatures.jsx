import React from "react";
import { Icon } from "@iconify/react";

const RobotFeatures = ({ section4Ref, section4Scale = 1, section4Opacity = 1 }) => {
  return (
    <div
      ref={section4Ref}
      className="min-h-screen relative bg-black transition-all duration-300 ease-out"
      style={{ transform: `scale(${section4Scale})`, opacity: section4Opacity }}
    >
      <div className="w-full px-4 sm:px-8 md:px-[60px] py-4 sm:py-4 flex flex-col items-center justify-center min-h-screen box-border">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-regular text-white mb-8 text-center">
          Our Robot Features
        </h2>

        {/* SM / MD Layout: single grid for all 8 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full lg:hidden">
          {[
            { icon: <Icon icon="mdi:cctv" width={38} />, text: "24/7 Autonomous Patrols" },
            { icon: <Icon icon="si:alert-fill" width={38} />, text: "AI-Powered Threat Detection" },
            { icon: <Icon icon="ic:baseline-360" width={38} />, text: "360° Vision & HD Cameras" },
            { icon: <Icon icon="mdi:eye-circle-outline" width={38} />, text: "Night Vision & Thermal Imaging" },
            { icon: <Icon icon="mdi:radar" width={38} />, text: "Smart Navigation (LiDAR + SLAM)" },
            { icon: <Icon icon="material-symbols:communication" width={42} />, text: "Two-Way Communication" },
            { icon: <Icon icon="tabler:temperature-celsius" width={38} />, text: "All-Weather Durability" },
            { icon: <Icon icon="mdi:battery-clock" width={38} />, text: "Long Battery Life + Auto Charging" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col text-[#FFFFFF66] hover:text-white items-center justify-center bg-white/8 px-4 sm:px-2 md:px-4 min-h-[160px] rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {item.icon}
              <p className="text-[12px] sm:text-[14px] md:text-[14px] text-center mt-2">{item.text}</p>
            </div>
          ))}
        </div>

        {/* LG+ Layout: first 5 and last 3 split into 2 grids */}
        <div className="hidden lg:block w-full">
          {/* First Grid */}
          <div className="grid grid-cols-5 gap-4 mb-4 w-full">
            {[
              { icon: <Icon icon="mdi:cctv" width={28} />, text: "24/7 Autonomous Patrols" },
              { icon: <Icon icon="si:alert-fill" width={28} />, text: "AI-Powered Threat Detection" },
              { icon: <Icon icon="ic:baseline-360" width={28} />, text: "360° Vision & HD Cameras" },
              { icon: <Icon icon="mdi:eye-circle-outline" width={28} />, text: "Night Vision & Thermal Imaging" },
              { icon: <Icon icon="mdi:radar" width={28} />, text: "Smart Navigation (LiDAR + SLAM)" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col text-[#FFFFFF66] hover:text-white items-center justify-center bg-white/8 px-8 min-h-[160px] rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                {item.icon}
                <p className="text-[14px] text-center mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Second Grid */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { icon: <Icon icon="material-symbols:communication" width={32} />, text: "Two-Way Communication" },
              { icon: <Icon icon="tabler:temperature-celsius" width={28} />, text: "All-Weather Durability" },
              { icon: <Icon icon="mdi:battery-clock" width={28} />, text: "Long Battery Life + Auto Charging" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col text-[#FFFFFF66] hover:text-white items-center justify-center bg-white/8 px-8 min-h-[160px] rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                {item.icon}
                <p className="text-[14px] text-center mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotFeatures;
