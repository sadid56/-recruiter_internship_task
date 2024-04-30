/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const SidebarNavItem = ({ path, icon: Icon, text, isToggle, isHover }) => {

  // sideber navitem controller
  return (
    <li className="hover:bg-gray-600 p-2 rounded-md w-full z-50">
      <NavLink to={path} className="flex items-center gap-2">
        <Icon
          className={`text-[30px] p-2 bg-primary text-white rounded-md ${
            isToggle ? "block" : ""
          }`}
        />
        <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
          {text}
        </span>
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
