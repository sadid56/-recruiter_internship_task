/* eslint-disable react/prop-types */
// Sideber.js
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import logo from "../../assets/logo/logo-dark.png";
import favIcon from "../../assets/logo/favicon.ico";
import { FaBars, FaCaretDown, FaCaretLeft, FaCodeBranch } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { LuTestTube2, LuTestTubes } from "react-icons/lu";
import { RiTestTubeFill } from "react-icons/ri";
import { FaRegCircleDot, FaUserDoctor } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { useState } from "react";
import "./sideber.css"

const SidebarItem = ({ icon, text, isToggle, isHover, path }) => {
  // list style controler
  return (
    <li  className="hover:bg-gray-200 p-2 rounded-md w-full">
      <NavLink  to={path} className="flex items-center gap-2">
        {icon({
          className: `text-[30px] p-2 bg-primary text-white rounded-md ${
            isToggle ? "block" : ""
          }`,
        })}
        <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
          {text}
        </span>
      </NavLink>
    </li>
  );
};

const Sideber = ({ isToggle, isHover, setIsToggle }) => {
  const [isTrue, setTrue] = useState(false);
  return (
    <div className="p-2 z-50 overflow-y-scroll">
      {/* company name and bars */}
      <div className="flex w-full justify-between pl-3">
        <img
          src={isToggle || isHover ? logo : favIcon}
          className={`${isToggle || isHover ? "w-24" : "w-10"}`}
          alt="Logo"
        />
        <button
          className="text-2xl block md:hidden"
          onClick={() => setIsToggle(false)}>
          <FaBars />
        </button>
      </div>
      {/* list */}
      <ul id="nav"  className="mt-10 flex flex-col items-start gap-1 text-[18px] font-semibold">
        <SidebarItem
          path={"/dashboard"}
          icon={CgProfile}
          text="Profile"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/invoices"}
          icon={BsStack}
          text="Invoices"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/reports"}
          icon={TbReportSearch}
          text="Reports"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/branches"}
          icon={FaCodeBranch}
          text="Branches"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/tests"}
          icon={GrTest}
          text="Tests"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/cultures"}
          icon={LuTestTube2}
          text="Cultures"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/culture-opions"}
          icon={RiTestTubeFill}
          text="Culture Opotions"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/antibiotics"}
          icon={LuTestTubes}
          text="Antibiotics"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/doctor"}
          icon={FaUserDoctor}
          text="Doctor"
          isToggle={isToggle}
          isHover={isHover}
        />

        {/* drop down menu */}
        <li
          onClick={() => setTrue(!isTrue)}
          className="hover:bg-gray-200 rounded-md p-2 w-full relative">
          <button className="flex items-center gap-2">
            <IoPricetagsSharp
              className={`text-[30px] p-2 bg-primary text-white rounded-md ${
                isToggle ? "block" : ""
              }`}
            />
            <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
              Price List
            </span>{" "}
            <span className={`${isToggle || isHover ? "block" : "hidden"}`}>{isTrue ? <FaCaretDown /> : <FaCaretLeft />}</span>
          </button>
          <ul
            className={`${
              isTrue
                ? "block absolute top-10 transition-all duration-500 bg-gray-100 w-full rounded-md space-y-1"
                : "hidden"
            }  `}>
            <li>
              <Link className="flex items-center gap-1 hover:bg-gray-300 p-2 rounded-md">
                <FaRegCircleDot /> <span className={`${isToggle || isHover ? "block" : "hidden"}`}>Test</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-1 hover:bg-gray-300 p-2 rounded-md">
                <FaRegCircleDot /> <span className={`${isToggle || isHover ? "block" : "hidden"}`}>Culture</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sideber;
