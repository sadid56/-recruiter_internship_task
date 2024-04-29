import Input from "../Input/Input";
import { MdArrowBack } from "react-icons/md";
import { FaCalendar, FaUser } from "react-icons/fa";
import { MdDiscount, MdPresentToAll } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CreateInvoices = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" mt-4 shadow-md rounded-md mx-3">
        <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
          <button onClick={() => navigate(-1)} className="text-2xl">
            <MdArrowBack />
          </button>{" "}
          <span>Create Invoice</span>
        </div>
        <div className="p-5">
          <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <Input icon={FaUser} label={"Name"} type={"text"} />
              <Input icon={MdPresentToAll} label={"Total"} type={"number"} />
              <Input icon={IoIosWallet} label={"Paid"} type={"number"} />
              <Input icon={MdDiscount} label={"Discount"} type={"number"} />
              <Input icon={FaCalendar} label={"Date"} type={"date"} />
              <select className="border rounded-md px-2 outline-none select-bordered w-full">
                <option>Pending</option>
                <option>Success</option>
              </select>
            </div>
            <button className="btn bg-primary text-white hover:bg-blue-900">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoices;
