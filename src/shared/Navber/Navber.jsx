/* eslint-disable react/no-unknown-property */
import { IoIosNotifications } from "react-icons/io";
import { IoSearchSharp, IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navber = () => {
  return (
    <div className="navbar p-0  flex items-center justify-between">
        <div className="w-[300px] mx-auto">
        <form className="w-full">
          <label
            for="default-search"
            className="mb-2
     text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute right-3 top-3">
              <IoSearchSharp className="text-xl text-gray-400" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 md:p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Search..."
              required
            />
          </div>
        </form>
        </div>

      <div className="flex items-center gap-0 md:gap-6 mr-0 md:mr-5">
      <Link className="text-2xl">
              <IoIosNotifications />
            </Link>
        <ul className="menu menu-horizontal ">
          <li>
            <details>
              <summary>
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <span>Sadid</span>
              </summary>
              <ul className="p-5 bg-base-100 rounded-t-none shadow-lg">
                <li>
                  <a>Logout</a>
                </li>
                <li>
                  <a>Link</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <Link className="text-xl">
              <IoSettings />
            </Link>
      </div>
 
    </div>
  );
};

export default Navber;
