import { IoSearchSharp } from "react-icons/io5";
import fakeData from "../../../../public/invoices.json";
import Invoice from "./Invoice";
import { IoMdCreate } from "react-icons/io";
const Invoices = () => {
  return (
    <section className="mx-3 mt-3 border rounded-md p-3">
      {/* table header */}
      <div className="flex w-f justify-between">
        <h2 className="text-2xl font-semibold border-b border-primary">
          <span className="text-primary">Invoices</span> Table
        </h2>
        <button className="btn bg-primary hover:bg-blue-800 text-white text-[18px]">
          <IoMdCreate />
          Create
        </button>
      </div>
      <hr className="my-3" />
      {/* search & page count */}
      <div className="flex w-full justify-between items-center">
        <label className="input input-bordered flex items-center gap-2 max-w-xs">
          <input type="text" className="grow" placeholder="Search" />
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
              <th>Total</th>
              <th>Discount</th>
              <th>Paid</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((invoice, i) => (
              <Invoice key={i} i={i} invoice={invoice} />
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

export default Invoices;
