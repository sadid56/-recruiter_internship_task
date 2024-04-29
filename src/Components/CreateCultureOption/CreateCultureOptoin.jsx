import { MdArrowBack } from "react-icons/md";
import Input from "../Input/Input";
import { MdDriveFileRenameOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom";

const CreateCultureOptoin = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-3">
        <div className=" mt-4 shadow-md rounded-md">
   <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
     <button onClick={() => navigate(-1)} className="text-2xl">
       <MdArrowBack />
     </button>{" "}
     <span>Create Option</span>
   </div>
   <div className="p-5">
     <form className="space-y-5 mt-6">
       <div className="w-full">
         <Input icon={MdDriveFileRenameOutline} label={"Name"} type={"text"} />
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

export default CreateCultureOptoin;