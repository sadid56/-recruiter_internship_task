import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { FaUser, FaPhone, FaPercent, FaMoneyBill } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const AddDoctor = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-3">
             <div className=" mt-4 shadow-md rounded-md">
        <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
          <button onClick={() => navigate(-1)} className="text-2xl">
            <MdArrowBack />
          </button>{" "}
          <span>Add new Doctor</span>
        </div>
        <div className="p-5">
          <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <Input icon={FaUser} label={"Name"} type={"text"} />
              <Input icon={MdEmail} label={"Email"} type={"email"} />
              <Input icon={FaPhone} label={"Phone"} type={"number"} />
              <Input icon={FaPercent} label={"Commission"} type={"number"} />
              <Input icon={FaMoneyBill} label={"Salary"} type={"number"} />
              
             
            </div>
            <button className="btn bg-primary text-white hover:bg-blue-900">
              Add
            </button>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddDoctor;