
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { MdArrowBack } from "react-icons/md";
import { MdOutlineShortcut , MdDriveFileRenameOutline} from "react-icons/md";

const UpdateAntibiotic = () => {
    const antibiotic = useLoaderData();
    const { name, shortcut, commercial_name } = antibiotic;
  const navigate = useNavigate();
  const antibioticData = [
    { label: "Name:", value: name },
    { label: "Shortcut:", value: shortcut },
    { label: "Commrcial Name:", value: commercial_name }
  ];
    return (
        <div className="mx-5">
        {/*  details */}
      <ul className="shadow-md p-4 w-full mt-5 space-y-1 rounded-md">
      <h1 className="text-2xl font-semibold border-b border-primary w-fit mb-3">Current <span className="text-primary">Antibiotic</span></h1>
        {antibioticData.map((item, index) => (
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
          <span>Update Antibiotic</span>
        </div>
        <div className="p-5">
        <form className="space-y-5 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <Input icon={MdDriveFileRenameOutline} label={"Name"} type={"text"} />
              <Input icon={MdOutlineShortcut} label={"Shortcut"} type={"text"} />
              <Input icon={MdDriveFileRenameOutline} label={"Commercial name"} type={"text"} />
             
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

export default UpdateAntibiotic;