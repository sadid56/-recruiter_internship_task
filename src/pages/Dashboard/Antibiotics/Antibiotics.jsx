
import Antibiotic from "./Antibiotic";
import fakeData from "../../../../public/antibiotics.json"
import TableHeader from "../../../shared/TableHeader/TableHeader";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";

const Antibiotics = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <TableHeader path={"/dashboard/create-antibiotic"} name={"Antibiotics"} text={"Create"}/>
      <hr className="my-3" />
      {/* page count */}
      <PageCount/>
      <hr className="my-3 " />
      <div className="overflow-x-auto  rounded-md">
        <table className="table ">
          <thead className="bg-primary py-4 rounded-md">
            <tr className="text-white text-sm">
              <th>Serial</th>
              <th>Name</th>
              <th>Shortcut</th>
              <th>Commercial name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((antibiotic, i) => (
              <Antibiotic key={i} i={i} antibiotic={antibiotic} />
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <Pagination/>
      </div>
    </section>
    );
};

export default Antibiotics;