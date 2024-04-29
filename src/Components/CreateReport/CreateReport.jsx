import { MdArrowBack } from "react-icons/md";
import Input from "../Input/Input";
import { FaUser } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { MdManageSearch , MdPhone } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CreateReport = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-3">
             <div className=" mt-4 shadow-md rounded-md">
        <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
          <button onClick={() => navigate(-1)} className="text-2xl">
            <MdArrowBack />
          </button>{" "}
          <span>Create Report</span>
        </div>
        <div className="p-5">
          <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <Input icon={FaUser} label={"Name"} type={"text"} />
              <Input icon={RiTestTubeFill} label={"Test"} type={"text"} />
              <Input icon={MdManageSearch} label={"Age"} type={"number"} />
              <Input icon={MdPhone} label={"Phone"} type={"number"} />
              <Input label={"Date"} type={"date"} />
              <select className="border rounded select-bordered w-full outline-none">
                    <option disabled selected>
                      Status
                    </option>
                    <option>Pending</option>
                    <option>Success</option>
                  </select>
                  <select className="border rounded select-bordered w-full py-2 outline-none">
                    <option disabled selected>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
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

export default CreateReport;