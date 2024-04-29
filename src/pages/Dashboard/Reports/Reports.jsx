import { IoMdCreate } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import fakeData from "../../../../public/reports.json";
import Report from "./Report";
import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";

const Reports = () => {
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
    <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <div className="flex w-f justify-between">
        <h2 className="text-2xl font-semibold border-b border-primary">
          <span className="text-primary">Reports</span> Table
        </h2>

        {/* filder data */}
        <div className="flex items-center gap-4">
          <div ref={dropdownRef} className="dropdown dropdown-end">
            <button
              onClick={() => setIsToggle(!isToggle)}
              tabIndex={0}
              role="button"
              className="btn border-primary text-[18px] border  hover:bg-primary hover:text-white">
              <FaFilter className="text-sm" /> Filter
            </button>
            {isToggle && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-4  space-y-3 shadow-lg bg-base-100 border w-52 ">
                <li>
                  <select className="border rounded select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </li>
                <li>
                  <select className="border rounded select-bordered w-full max-w-xs">
                    <option disabled selected>
                      status
                    </option>
                    <option>Pending</option>
                    <option>Success</option>
                  </select>
                </li>
              </ul>
            )}
          </div>
          <Link
            to={"/dashboard/create-report"}
            className="btn bg-primary hover:bg-blue-800 text-white text-[18px]">
            <IoMdCreate />
            Create
          </Link>
        </div>
      </div>
      <hr className="my-3" />
      {/* search & page count */}
      <div className="flex w-full justify-between items-center">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <input type="text" className="grow" placeholder="Search reports..." />
          <IoSearchSharp />
        </label>
        <select className="select select-bordered w-full max-w-[100px]">
          <option selected>5</option>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <hr className="my-3 " />
      <div className="overflow-x-auto  rounded-md">
        <table className="table ">
          <thead className="bg-primary py-4 rounded-md">
            <tr className="text-white text-sm">
              <th>Count</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Tests</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((report, i) => (
              <Report key={i} i={i} report={report} />
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <div className="w-ful flex justify-center">
          <div className="join border rounded-none my-5">
            <button className="join-item btn">«</button>
            <button className="join-item btn bg-primary text-white rounded-md">
              1
            </button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
