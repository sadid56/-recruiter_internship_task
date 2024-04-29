/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Invoice = ({ invoice, i }) => {
  const { id, client_name, discount, total, paid, date, status } = invoice;
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
      <td>{client_name}</td>
      <td>{total} BDT</td>
      <td>{discount} BDT</td>
      <td>{paid} BDT</td>
      <td>{date}</td>
      <td>
        {status === "Success" ? (
          <MdOutlineDone className="text-xl text-green-600" />
        ) : (
          <VscError className="text-xl text-red-600" />
        )}
      </td>
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
                <Link to={`/dashboard/invoice-edit/${id}`}>Edit</Link>
              </li>
            </ul>
          )}
        </div>
      </td>
    </tr>
  );
};

export default Invoice;
