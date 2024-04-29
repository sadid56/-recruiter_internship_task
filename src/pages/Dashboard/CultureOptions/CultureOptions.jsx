import { IoMdCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import fakeData from "../../../../public/culture-option.json"
import { IoSearchSharp } from "react-icons/io5";
import CultureOption from "./CultureOption";

const CultureOptions = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <div className="flex w-f justify-between">
        <h2 className="text-2xl font-semibold border-b border-primary">
          <span className="text-primary">Cultur Option</span> Table
        </h2>
        <Link to={"/dashboard/create-culture-option"} className="btn bg-primary hover:bg-blue-800 text-white text-[18px]">
          <IoMdCreate />
          Create
        </Link>
      </div>
      <hr className="my-3" />
      {/* search & page count */}
      <div className="flex w-full justify-between items-center">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <input type="text" className="grow" placeholder="Search..." />
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
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((culture, i) => (
              <CultureOption key={i} i={i} culture={culture} />
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

export default CultureOptions;