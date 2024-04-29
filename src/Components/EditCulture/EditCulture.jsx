import { MdArrowBack } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { BiWorld } from "react-icons/bi";
import { PiEyedropperSampleBold } from "react-icons/pi";
import { IoIosPricetags } from "react-icons/io";

const EditCulture = () => {
    const culture = useLoaderData();
    const {sample_type, price, name} = culture;
  const navigate = useNavigate();
  const cultureData = [
    { label: "Name:", value: name },
    { label: "Sample Type:", value: sample_type },
    { label: "Price:", value: price }
  ];
    return (
        <div className="mx-5">
        {/* branch details */}
      <ul className="shadow-md p-4 w-full mt-5 space-y-1 rounded-md">
        {cultureData.map((item, index) => (
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
          <span>Update Culture</span>
        </div>
        <div className="p-5">
        <form className="space-y-5 mt-6">
       <div className="grid grid-cols-2 gap-4">
         <Input icon={BiWorld} label={"Name"} type={"text"} />
         <Input icon={PiEyedropperSampleBold} label={"Sample Type"} type={"text"} />
         <Input icon={IoIosPricetags} label={"Price"} type={"number"} />
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

export default EditCulture;