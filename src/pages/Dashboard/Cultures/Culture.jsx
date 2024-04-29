/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Culture = ({culture, i}) => {
    const {sample_type, price, name} = culture;
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
        <td>{sample_type}</td>
        <td>{price}</td>
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
                  <Link to={`/dashboard/edit-culture/${name}`}>Edit</Link>
                </li>
              </ul>
            )}
          </div>
        </td>
      </tr>
    );
};

export default Culture;