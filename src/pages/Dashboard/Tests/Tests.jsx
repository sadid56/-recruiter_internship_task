
import fakeData from "../../../../public/tests.json"
import Test from "./Test";
import TableHeader from "../../../shared/TableHeader/TableHeader";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";


const Tests = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
        {/* table header */}
        <TableHeader text={"Tests"} path={"/dashboard/create-test"} name={"New Test"}/>
        <hr className="my-3" />
        {/* page count */}
       <PageCount/>
        <hr className="my-3 " />
        <div className="overflow-x-auto  rounded-md">
          <table className="table ">
            <thead className="bg-primary py-4 rounded-md">
              <tr className="text-white text-sm">
                <th>Serial</th>
                <th>Test Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((test, i) => (
                <Test key={i} i={i} test={test} />
              ))}
            </tbody>
          </table>
  
          {/* pagination */}
          <Pagination/>
        </div>
      </section>
    );
};

export default Tests;