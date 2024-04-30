import ListTest from "./ListTest";
import fakeData from "../../../../public/price-test.json";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";
const ListTests = () => {
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
              <ListTest key={i} i={i} test={test} />
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

export default ListTests;
