import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { MdArrowBack, MdDriveFileRenameOutline } from "react-icons/md"
const UpdateCultureOption = () => {
    const option = useLoaderData();
    const { name} = option;
  const navigate = useNavigate();

    return (
        <div className="mx-5">
        {/* update form */}
      <div className=" mt-4 shadow-md rounded-md">
        <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
          <button onClick={() => navigate(-1)} className="text-2xl">
            <MdArrowBack />
          </button>{" "}
          <span>Update Option [{name}]</span>
        </div>
        <div className="p-5">
        <form className="space-y-5 mt-6">
       <div className="w-full">
         <Input icon={MdDriveFileRenameOutline} label={"Name"} type={"text"} />
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

export default UpdateCultureOption;