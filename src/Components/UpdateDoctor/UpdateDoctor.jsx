import Input from "../Input/Input";
import { FaUser, FaPhone, FaPercent, FaMoneyBill } from "react-icons/fa";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateDoctor = () => {
    const doctor = useLoaderData();
    const {name, email, phone, address, commission, monthly_salary } = doctor;
  const navigate = useNavigate();
  const BranchData = [
    { label: "Name:", value: name },
    { label: "Email:", value: email },
    { label: "Phone:", value: phone },
    { label: "Address:", value: address},
    { label: "Commission:", value: `${commission}%`},
    { label: "Salary:", value: `${monthly_salary} BDT`},
  ];
    return (
        <div className="mx-5">
        {/* branch details */}
      <ul className="shadow-md p-4 w-full mt-5 space-y-1 rounded-md">
        {BranchData.map((item, index) => (
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
          <span>Update Doctor details</span>
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
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateDoctor;