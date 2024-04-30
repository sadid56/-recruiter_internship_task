import fakeData from "../../../../public/list-culture.json";
import Pagination from "../../../shared/Pagination/Pagination";
import PageCount from "../../../shared/PageCount/PageCount";

const ListCulture = () => {
  return (
    <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/*  page count */}
      <PageCount />
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
              <tr
                key={i}
                className="hover:bg-gray-200 rounded border-b border-gray-200">
                <th className="border-r border-gray-200">{i + 1}</th>
                <td className="border-r border-gray-200">{test.name}</td>
                <td>
                  <div className="join">
                    <input
                      className="input input-bordered join-item"
                      type="number"
                      defaultValue={test.price}
                    />
                    <button className="btn join-item rounded-r bg-gray-300">
                      BDT
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn bg-primary text-white mt-5">Save</button>
        {/* pagination */}
        <Pagination />
      </div>
    </section>
  );
};

export default ListCulture;
