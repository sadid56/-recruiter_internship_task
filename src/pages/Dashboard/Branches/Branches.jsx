
import fakeData from "../../../../public/branches.json"
import Branch from "./Branch";
import TableHeader from "../../../shared/TableHeader/TableHeader";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";
const Branches = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <TableHeader text={"Create"} path={"/dashboard/create-branch"} name={"Branches"}/>
      <hr className="my-3" />
      {/* search & page count */}
      <PageCount/>
      <hr className="my-3 " />
      <div className="overflow-x-auto  rounded-md">
        <table className="table ">
          <thead className="bg-primary py-4 rounded-md">
            <tr className="text-white text-sm">
              <th>Serial</th>
              <th>Country</th>
              <th>City</th>
              <th>Branch Name</th>
              <th>Country code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((branch, i) => (
              <Branch key={i} i={i} branch={branch} />
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <Pagination/>
      </div>
    </section>
    );
};

export default Branches;