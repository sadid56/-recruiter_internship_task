import { MdArrowBack } from "react-icons/md";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { IoPricetagsSharp } from "react-icons/io5";
import { RiTestTubeFill } from "react-icons/ri";


const CreateTest = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-3">
        <div className=" mt-4 shadow-md rounded-md">
   <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
     <button onClick={() => navigate(-1)} className="text-2xl">
       <MdArrowBack />
     </button>{" "}
     <span>Create New Test</span>
   </div>
   <div className="p-5">
     <form className="space-y-5 mt-6">
       <div className="grid grid-cols-2 gap-4">
         <Input icon={RiTestTubeFill} label={"Test Name"} type={"text"} />
         <Input icon={IoPricetagsSharp} label={"Price"} type={"number"} />
        
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

export default CreateTest;