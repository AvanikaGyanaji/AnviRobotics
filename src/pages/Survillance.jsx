import React, { useEffect, useState, useRef } from "react";
import { Cpu, Camera, Shield, AlertTriangle, BatteryFull, Wifi, CloudRain } from "lucide-react";

export const Survillance = () => {
  const [stage, setStage] = useState(0);
  const totalStages = 7; // we have 7 stages now (0–6)
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true;

      // scroll down
      if (e.deltaY > 0) {
        setStage((prev) => Math.min(prev + 1, totalStages - 1));
      }
      // scroll up
      else {
        setStage((prev) => Math.max(prev - 1, 0));
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 900); // ensure scroll delay matches animation duration
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <img
        src="/survillance/B6.png"
        alt="Robot"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
          stage >= 2 ? "brightness-[60%] blur-[1px]" : "brightness-100"
        }`}
      />

      {/* Overlay Tint */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ease-in-out pointer-events-none ${
          stage === 0 ? "opacity-0" : stage === 1 ? "opacity-20" : "opacity-40"
        }`}
      />

      {/* Scroll Container */}
      <div
        className="absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${
            stage === 6
              ? 300
              : stage >= 5
              ? 200
              : stage >= 1
              ? 100
              : 0
          }vh)`,
        }}
      >
        {/* Section 1 */}
        <div className="h-screen flex flex-col justify-center translate-x-[6vw]">
          <h1 className="text-[36px] md:text-[56px] font-semibold text-white">
            Surveillance <br /> Robot
          </h1>
          <p className="max-w-[420px] text-base md:text-lg leading-7 text-white mt-4">
            Revolutionary AI-powered security that never sleeps. Protect your
            property with intelligent, autonomous patrol technology.
          </p>
        </div>

        {/* Section 2 */}
        <div className="h-screen flex flex-col justify-center translate-x-[6vw]">
          <p className="text-[46px] md:text-[46px] font-light leading-[1.15] text-white max-w-[90vw] transition-all duration-700">
            <span
              className={`transition-all duration-700 ease-out ${
                stage >= 1 ? "text-white opacity-100" : "text-white/40 opacity-40"
              }`}
            >
              Our AI-powered Surveillance Robot redefines modern security and
              safety.
            </span>
            <span
              className={`transition-all duration-700 ease-out ${
                stage >= 2 ? "text-white opacity-100" : "text-white/40 opacity-40"
              }`}
            >
              {" "}It offers real-time monitoring with intelligent data analysis.
            </span>
            <span
              className={`transition-all duration-700 ease-out ${
                stage >= 3 ? "text-white opacity-100" : "text-white/40 opacity-40"
              }`}
            >
              {" "}With autonomous mobility, it ensures seamless and efficient operations.
            </span>
            <span
              className={`transition-all duration-700 ease-out ${
                stage >= 4 ? "text-white opacity-100" : "text-white/40 opacity-40"
              }`}
            >
              {" "}Designed for reliability, it delivers continuous vigilance and rapid response.
            </span>
          </p>
        </div>

        {/* Section 3 */}
        <div
          className={`h-screen bg-black flex items-center justify-between px-[60px] py-[60px] transition-all duration-700 ease-in-out ${
            stage >= 5
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } ${
            stage === 6
              ? "scale-[0.5] opacity-70"
              : "scale-100 opacity-100"
          }`}
        >
          <div className="flex-1 flex justify-end">
            <img
              src="/survillance/b31.png"
              className="w-[457px] h-[496px] object-contain"
              alt="Surveillance bot side view"
            />
          </div>

          <p className="text-white text-[19px] text-center italic leading-relaxed max-w-[200px] px-4">
            "We make security smarter, safer, and endlessly vigilant."
          </p>

          <div className="flex-1 flex justify-start">
            <img
              src="/survillance/b32.png"
              className="w-[457px] h-[496px] object-contain"
              alt="Surveillance bot front view"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div
  className={`min-h-screen relative bg-black transition-all duration-700 ease-in-out ${
    stage >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
  {/* Inner padded container */}
  <div className="px-[60px] py-[60px] flex flex-col items-center justify-start w-full h-full box-border">
    {/* Heading */}
    <h2 className="text-[38px] md:text-[60px] font-semibold text-white mb-12 text-center w-full">
      Our Robot Features
    </h2>

    {/* First Grid - 5 items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-[1200px] mx-auto mb-12">
      {[
        { icon: <Cpu size={48} />, text: "Autonomous Navigation" },
        { icon: <Camera size={48} />, text: "AI Surveillance" },
        { icon: <Shield size={48} />, text: "Obstacle Detection" },
        { icon: <AlertTriangle size={48} />, text: "Real-time Alerts" },
        { icon: <BatteryFull size={48} />, text: "Durable Design" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
        >
          {item.icon}
          <p className="text-white text-center mt-4">{item.text}</p>
        </div>
      ))}
    </div>

    {/* Second Grid - 3 items */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[900px] mx-auto">
      {[
        { icon: <BatteryFull size={48} />, text: "Long Battery Life" },
        { icon: <Wifi size={48} />, text: "Remote Monitoring" },
        { icon: <CloudRain size={48} />, text: "Weather Resistant" },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
        >
          {item.icon}
          <p className="text-white text-center mt-4">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      </div>
    </div>
  );
};