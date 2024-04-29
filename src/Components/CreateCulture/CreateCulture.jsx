import { MdArrowBack } from "react-icons/md";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { BiWorld } from "react-icons/bi";
import { PiEyedropperSampleBold } from "react-icons/pi";
import { IoIosPricetags } from "react-icons/io";
const CreateCulture = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-3">
        <div className=" mt-4 shadow-md rounded-md">
   <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
     <button onClick={() => navigate(-1)} className="text-2xl">
       <MdArrowBack />
     </button>{" "}
     <span>Create Culture</span>
   </div>
   <div className="p-5">
     <form className="space-y-5 mt-6">
       <div className="grid grid-cols-2 gap-4">
         <Input icon={BiWorld} label={"Name"} type={"text"} />
         <Input icon={PiEyedropperSampleBold} label={"Sample Type"} type={"text"} />
         <Input icon={IoIosPricetags} label={"Price"} type={"number"} />
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

export default CreateCulture;