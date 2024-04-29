import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { MdArrowBack } from "react-icons/md";
import { FaCalendar, FaUser } from "react-icons/fa";
import { MdDiscount, MdPresentToAll } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
const InvoiceEdite = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const {client_name, discount, total, paid, date, status } = data;

  // invoice data
  const invoiceData = [
    { label: "Name:", value: client_name },
    { label: "Discount:", value: `${discount}%` },
    { label: "Total:", value: `${total} BDT` },
    { label: "Paid:", value: `${paid} BDT` },
    { label: "Date:", value: date },
    { label: "Status:", value: status }
  ];
  return (
    <div className="mx-5">

        {/* invoice details */}
      <ul className="shadow-md p-4 w-full mt-5 space-y-1 rounded-md">
        {invoiceData.map((item, index) => (
          <li key={index} className="text-[18px] font-medium text-gray-600">
            <span className="text-primary">{item.label}</span> {item.value}
          </li>
        ))}
      </ul>

        {/* update form */}
      <div className=" mt-4 shadow-md rounded-md">
        <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
          <button onClick={() => navigate(-1)} className="text-2xl">
            <MdArrowBack />
          </button>{" "}
          <span>Update Invoice</span>
        </div>
        <div className="p-5">
          <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <Input icon={FaUser} label={"Name"} type={"text"} />
              <Input icon={MdPresentToAll} label={"Total"} type={"number"} />
              <Input icon={IoIosWallet} label={"Paid"} type={"number"} />
              <Input icon={MdDiscount} label={"Discount"} type={"number"} />
              <Input icon={FaCalendar} label={"Date"} type={"date"} />
            </div>
            <button className="btn bg-primary text-white hover:bg-blue-900">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEdite;
