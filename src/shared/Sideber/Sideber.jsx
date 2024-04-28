/* eslint-disable react/prop-types */
// Sideber.js
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbFileInvoice, TbReportSearch } from "react-icons/tb";
import logo from "../../assets/logo/logo-dark.png";
import favIcon from "../../assets/logo/favicon.ico";
import { FaBars } from "react-icons/fa";

const SidebarItem = ({ icon, text, isToggle, isHover, path }) => {
  // list style controler
  return (
    <li className="hover:bg-gray-200 p-2 rounded-md">
      <NavLink to={path} className="flex items-center gap-2">
        {icon({ className: `text-4xl bg-primary text-white p-2 rounded-md ${isToggle ? "block" : ""}` })}
        <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
          {text}
        </span>
      </NavLink>
    </li>
  );
};

const Sideber = ({ isToggle, isHover, setIsToggle }) => {
  return (
    <div className="p-2 z-50">
      {/* company name and bars */}
      <div className="flex w-full justify-between pl-3">
      <img
        src={isToggle || isHover ? logo : favIcon}
        className={`${isToggle || isHover ? "w-24" : "w-10"}`}
        alt="Logo"
      />
      <button className="text-2xl block md:hidden" onClick={()=>setIsToggle(false)}><FaBars/></button>
      </div>
      {/* list */}
      <ul className="mt-10 flex flex-col gap-1 text-[18px] font-semibold">
        <SidebarItem
          path={"/dashboard"}
          icon={CgProfile}
          text="Profile"
          isToggle={isToggle}
          isHover={isHover}
        />
        <SidebarItem
          path={"/dashboard/invoices"}
          icon={TbFileInvoice}
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
      </ul>
    </div>
  );
};

export default Sideber;
