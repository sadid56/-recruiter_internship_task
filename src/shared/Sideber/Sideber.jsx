/* eslint-disable react/prop-types */
// Sideber.js
import { CgProfile } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import logo from "../../assets/logo/logo-dark.png";
import favIcon from "../../assets/logo/favicon.ico";
import { FaBars, FaCodeBranch } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { LuTestTube2, LuTestTubes } from "react-icons/lu";
import { RiTestTubeFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { useState } from "react";
import "./sideber.css";
import SidebarNavItem from "./SideberNavItem";
import SidebarDropdown from "./SideberDropDown";

const Sideber = ({ isToggle, isHover, setIsToggle }) => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="p-2">
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
      <ul
        id="nav"
        className="mt-10 flex flex-col items-start gap-1 text-[18px] font-semibold">
        <SidebarNavItem
          path={"/dashboard/profile"}
          icon={CgProfile}
          text="Profile"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/invoices"}
          icon={BsStack}
          text="Invoices"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/reports"}
          icon={TbReportSearch}
          text="Reports"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/branches"}
          icon={FaCodeBranch}
          text="Branches"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/tests"}
          icon={GrTest}
          text="Tests"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/cultures"}
          icon={LuTestTube2}
          text="Cultures"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/culture-options"}
          icon={RiTestTubeFill}
          text="Culture Opotions"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/antibiotics"}
          icon={LuTestTubes}
          text="Antibiotics"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarNavItem
          path={"/dashboard/doctor"}
          icon={FaUserDoctor}
          text="Doctor"
          isToggle={isToggle}
          isHover={isHover}
        />

        {/* list drop down menu */}
        <SidebarDropdown
          isTrue={isTrue}
          setIsTrue={setIsTrue}
          isToggle={isToggle}
          isHover={isHover}
        />
      </ul>
    </div>
  );
};

export default Sideber;
