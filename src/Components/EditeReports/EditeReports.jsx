import { MdArrowBack } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { FaUser } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { MdManageSearch , MdPhone } from "react-icons/md";
const EditeReports = () => {
    const data = useLoaderData();
    const {client_name, tests, gender, age, phone, date, status} = data;
  const navigate = useNavigate();
  const reportData = [
    { label: "Name:", value: client_name },
    { label: "Test:", value: tests.join(", ") },
    { label: "Gender:", value: gender },
    { label: "Age:", value: age},
    { label: "Phone:", value: phone },
    { label: "Date:", value: date },
    { label: "Status:", value: status }
  ];
    return (
        <div className="mx-5">

        {/* details */}
      <ul className="shadow-md p-4 w-full mt-5 space-y-1 rounded-md">
      <h1 className="text-2xl font-semibold border-b border-primary w-fit mb-3">Current <span className="text-primary">Report</span></h1>
        {reportData.map((item, index) => (
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
          <span>Update Report</span>
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default EditeReports;