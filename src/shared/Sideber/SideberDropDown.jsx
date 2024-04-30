/* eslint-disable react/prop-types */
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoPricetagsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

// sideber dropdown controller
const SidebarDropdown = ({ isTrue, setIsTrue, isToggle, isHover }) => {
  return (
    <li
      onClick={() => setIsTrue(!isTrue)}
      className="hover:bg-gray-600 rounded-md p-2 w-full relative"
    >
      <button className="flex items-center gap-2">
        <IoPricetagsSharp
          className={`text-[30px] p-2 bg-primary text-white rounded-md ${
            isToggle ? "block" : ""
          }`}
        />
        <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
          Price List
        </span>{" "}
        <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
          {isTrue ? <FaCaretDown /> : <FaCaretLeft />}
        </span>
      </button>
      <ul
        className={`${
          isTrue
            ? "block absolute top-10 transition-all duration-500 bg-gray-700 w-full rounded-md space-y-1"
            : "hidden"
        }  `}
      >
        <li>
          <Link
            to={"/dashboard/list-test"}
            className="flex items-center gap-1 hover:bg-gray-400 p-2 rounded-md"
          >
            <FaRegCircleDot />{" "}
            <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
              Test
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={"/dashboard/list-culture"}
            className="flex items-center gap-1 hover:bg-gray-400 p-2 rounded-md"
          >
            <FaRegCircleDot />{" "}
            <span className={`${isToggle || isHover ? "block" : "hidden"}`}>
              Culture
            </span>
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default SidebarDropdown;
