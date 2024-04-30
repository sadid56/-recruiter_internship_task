import Doctor from "./Doctor";
import fakeData from "../../../../public/doctors.json";
import TableHeader from "../../../shared/TableHeader/TableHeader";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";

const Doctors = () => {
  return (
    <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <TableHeader
        path={"/dashboard/add-doctor"}
        name={"Doctors"}
        text={"Add Doctor"}
      />
      <hr className="my-3" />
      {/* page count */}
      <PageCount />
      <hr className="my-3 " />
      <div className="overflow-x-auto  rounded-md">
        <table className="table ">
          <thead className="bg-primary py-4 rounded-md">
            <tr className="text-white text-sm">
              <th>Position</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Comission</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((doctor, i) => (
              <Doctor key={i} i={i} doctor={doctor} />
            ))}
          </tbody>
        </table>

        {/* pagination */}
        <Pagination />
      </div>
    </section>
  );
};

export default Doctors;
