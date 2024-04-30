
import fakeData from "../../../../public/invoices.json";
import PageCount from "../../../shared/PageCount/PageCount";
import Pagination from "../../../shared/Pagination/Pagination";
import Invoice from "./Invoice";
import TableHeader from "../../../shared/TableHeader/TableHeader";
const Invoices = () => {
  return (
    <section className="mx-3 mt-3 border rounded-md p-3 bg-white">
      {/* table header */}
      <TableHeader text={"Create"} path={"/dashboard/create-invoice"} name={"Invoices"}/>
      <hr className="my-3" />
      {/* page count */}
      <PageCount/>
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
        <Pagination/>
      </div>
    </section>
  );
};

export default Invoices;
