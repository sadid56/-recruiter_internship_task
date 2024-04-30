
import fakeData from "../../../../public/culture-option.json"
import CultureOption from "./CultureOption";
import Pagination from "../../../shared/Pagination/Pagination";
import PageCount from "../../../shared/PageCount/PageCount";
import TableHeader from "../../../shared/TableHeader/TableHeader";

const CultureOptions = () => {
    return (
        <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <TableHeader path={"/dashboard/create-culture-option"} name={"Culture Option"} text={"Create"}/>
      <hr className="my-3" />
      {/*  page count */}
      <PageCount/>
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
        <Pagination/>
      </div>
    </section>
    );
};

export default CultureOptions;