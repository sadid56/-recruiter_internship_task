/* eslint-disable react/prop-types */
import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const TableHeader = ({text, path, name}) => {
    return (
        <div className="flex w-f justify-between">
        <h2 className="text-2xl font-semibold border-b border-primary">
          <span className="text-primary">{name}</span> Table
        </h2>
        <Link to={path} className="btn bg-primary hover:bg-blue-800 text-white text-[18px]">
          <IoMdCreate />
          {text}
        </Link>
      </div>
    );
};

export default TableHeader;