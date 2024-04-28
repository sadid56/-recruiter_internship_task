/* eslint-disable react/prop-types */
// Sideber.js
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbFileInvoice, TbReportSearch } from "react-icons/tb";
import logo from "../../assets/logo/logo-dark.png";
import favIcon from "../../assets/logo/favicon.ico";
import { FaBars } from "react-icons/fa";

const SidebarItem = ({ icon, text, isToggle, isHover, path }) => {
  return (
    <li>
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
    <div className="p-5">
      <div className="flex w-full justify-between">
      <img
        src={!isToggle ? favIcon : logo}
        className={`${!isToggle ? "w-10" : "w-24"}`}
        alt="Logo"
      />
      <button className="text-2xl block md:hidden" onClick={()=>setIsToggle(false)}><FaBars/></button>
      </div>
      <ul className="mt-10 flex flex-col gap-3 text-[18px] font-semibold">
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
