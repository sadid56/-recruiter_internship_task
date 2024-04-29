/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Antibiotic = ({antibiotic, i}) => {
    const { name, shortcut, commercial_name } = antibiotic;
    const [isToggle, setIsToggle] = useState(false);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsToggle(false);
        }
      };
      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }, []);
    return (
        <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{shortcut}</td>
      <td>{commercial_name}</td>
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