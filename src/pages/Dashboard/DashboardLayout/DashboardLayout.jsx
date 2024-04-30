// DashboardLayout.js
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sideber from "../../../shared/Sideber/Sideber";
import Navber from "../../../shared/Navber/Navber";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isToggle, setIsToggle] = useState(true);
  const [isHover, setIsHover] = useState(true);

  // onMouse hover event handler
  const handleMouseEnter = () => {
    if (!isToggle) {
      setIsHover(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <main className="flex">
      {/* sideber */}
      <div
      // style={{boxShadow:"0px 0px 20px "}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`bg-[#070F2B] text-white z-50 shadow-md h-screen overflow-y-auto block fixed md:sticky top-0 ${
          isToggle || isHover
            ? "w-80 "
            : " w-fit hidden md:block  left-0 transition-all duration-300"
        } `}
      >
        <Sideber setIsToggle={setIsToggle} isToggle={isToggle} isHover={isHover} />
      </div>
      <div className={` min-h-screen w-full bg-[#f4f0f0]`}>
        {/* navber */}
        <nav className="flex sticky top-0 z-50 bg-[#00215E] justify-between px-3 shadow-md">
          <button className={`text-2xl text-white`} onClick={()=> setIsToggle(!isToggle)}>
            <FaBars />
          </button>
          <Navber />
        </nav>
        {/* main content */}
        <div className="">
        <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
