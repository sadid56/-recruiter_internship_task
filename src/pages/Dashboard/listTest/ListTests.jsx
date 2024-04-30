import { IoSearchSharp } from "react-icons/io5";
import ListTest from "./ListTest";
import fakeData from "../../../../public/price-test.json"
const ListTests = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
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
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((test, i) => (
                <ListTest key={i} i={i} test={test} />
              ))}
            </tbody>
          </table>
                <button className="btn bg-primary text-white mt-5">Save</button>
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

export default ListTests;