/* eslint-disable react/prop-types */
import {  useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import useClickOutside from "../../../Hooks/useClickOutSide";


const Antibiotic = ({antibiotic, i}) => {
    const { name, shortcut, commercial_name } = antibiotic;
    const [isToggle, setIsToggle] = useState(false);
    const dropdownRef = useRef(null);
  
    const handleClickOutside = () => {
      setIsToggle(false);
    };
    useClickOutside(dropdownRef, handleClickOutside);
    return (
        <tr className="hover:bg-gray-200 rounded-md border-b border-gray-200 cursor-pointer">
      <th className="border-r border-gray-200">{i + 1}</th>
      <td className="border-r border-gray-200">{name}</td>
      <td className="border-r border-gray-200">{shortcut}</td>
      <td className="border-r border-gray-200">{commercial_name}</td>
      <td>
        <div ref={dropdownRef} className="dropdown dropdown-end">
          <button
            onClick={() => setIsToggle(!isToggle)}
            tabIndex={0}
            role="button"
            className="btn text-xl">
            {isToggle ? <FaCaretUp /> : <FaCaretDown />}
          </button>
          {isToggle && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 border w-52 ">
              <li>
                <a>Delete</a>
              </li>
              <li>
                <Link to={`/dashboard/edit-antibiotic/${shortcut}`}>Edit</Link>
              </li>
            </ul>
          )}
        </div>
      </td>
    </tr>
    );
};

export default Antibiotic;