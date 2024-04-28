// DashboardLayout.js
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sideber from "../../../shared/Sideber/Sideber";
import Navber from "../../../shared/Navber/Navber";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isToggle, setIsToggle] = useState(true);
  const [isHover, setIsHover] = useState(true);
console.log(isToggle);
  const handleMouseEnter = () => {
    if (!isToggle) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div className="flex">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`bg-white border border-red-400 min-h-screen z-10 ${
          isToggle || isHover
            ? "w-64 block fixed md:sticky"
            : " w-fit hidden md:block  left-0 transition-all duration-300"
        } `}
      >
        <Sideber setIsToggle={setIsToggle} isToggle={isToggle} isHover={isHover} />
      </div>
      <div className={`border min-h-screen w-full ${isToggle}`}>
        <div className="flex justify-between px-3 shadow-md">
          <button className={`text-2xl`} onClick={()=> setIsToggle(!isToggle)}>
            <FaBars />
          </button>
          <Navber />
        </div>
        <div >
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
