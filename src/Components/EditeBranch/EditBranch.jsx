import { MdArrowBack } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { BiWorld } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import { MdLocationCity } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
const EditBranch = () => {
    const branch = useLoaderData();
    console.log(branch);
    const { country, city, country_code, branch_name } = branch;
  const navigate = useNavigate();
  const BranchData = [
    { label: "Country:", value: country },
    { label: "Branch Name:", value: branch_name },
    { label: "City:", value: city },
    { label: "Country Code:", value: country_code},
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
          <span>Update Branch</span>
        </div>
        <div className="p-5">
        <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <Input icon={BiWorld} label={"Country"} type={"text"} />
              <Input icon={MdLocationCity} label={"City"} type={"text"} />
              <Input icon={TbWorldWww} label={"Country Code"} type={"text"} />
              <Input icon={FaCodeBranch} label={"Branch Name"} type={"text"} />
              <Input label={"Date"} type={"date"} />
             
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

export default EditBranch;