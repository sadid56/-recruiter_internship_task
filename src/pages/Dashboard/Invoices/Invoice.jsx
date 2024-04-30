/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import useClickOutside from "../../../Hooks/useClickOutSide";

const Invoice = ({ invoice, i }) => {
  const { id, client_name, discount, total, paid, date, status } = invoice;
  const [isToggle, setIsToggle] = useState(false);
  const dropdownRef = useRef(null);
  const handleClickOutside = () => {
    setIsToggle(false);
  };
  useClickOutside(dropdownRef, handleClickOutside);

  return (
    <tr className="hover:bg-gray-200 rounded-md border-b border-gray-200 cursor-pointer">
      <th className="border-r border-gray-200">{i + 1}</th>
      <td className="border-r border-gray-200">{client_name}</td>
      <td className="border-r border-gray-200">{total} BDT</td>
      <td className="border-r border-gray-200">{discount} BDT</td>
      <td className="border-r border-gray-200">{paid} BDT</td>
      <td className="border-r border-gray-200">{date}</td>
      <td className="border-r border-gray-200">
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
