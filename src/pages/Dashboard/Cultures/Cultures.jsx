
import fakeData from "../../../../public/cultures.json"
import Culture from "./Culture";
import TableHeader from "../../../shared/TableHeader/TableHeader";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";
const Cultures = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <TableHeader name={"Cultures"} path={"/dashboard/create-culture"} text={"Add Culture"}/>
      <hr className="my-3" />
      {/* page count */}
     <PageCount/>
      <hr className="my-3 " />
      <div className="overflow-x-auto  rounded-md">
        <table className="table ">
          <thead className="bg-primary py-4 rounded-md">
            <tr className="text-white text-sm">
                <th>#</th>
              <th>Name</th>
              <th>Sample Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((culture, i) => (
              <Culture key={i} i={i} culture={culture} />
            ))}
          </tbody>
        </table>

        {/* pagination */}
       <Pagination/>
      </div>
    </section>
    );
};

export default Cultures;