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
        className={`bg-white shadow-md min-h-screen z-10 ${
          isToggle || isHover
            ? "w-64 block fixed md:sticky"
            : " w-fit hidden md:block  left-0 transition-all duration-300"
        } `}
      >
        <Sideber setIsToggle={setIsToggle} isToggle={isToggle} isHover={isHover} />
      </div>
      <div className={`border min-h-screen w-full bg-[#f4f0f0]`}>
        {/* navber */}
        <nav className="flex z-50 bg-white justify-between px-3 shadow-md">
          <button className={`text-2xl`} onClick={()=> setIsToggle(!isToggle)}>
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
