import Input from "../Input/Input";
import { IoPricetagsSharp } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
import { RiTestTubeFill } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateTest = () => {
    const data = useLoaderData();
    const {test_name, price} = data;
  const navigate = useNavigate();
  const testData = [
    { label: "Test Name:", value: test_name },
    { label: "Price:", value: price },
  ];
    return (
        <div className="mx-5">
        {/* invoice details */}
      <ul className="shadow-md p-4 w-full mt-5 space-y-1 rounded-md">
        {testData.map((item, index) => (
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
          <span>Update Test</span>
        </div>
        <div className="p-5">
        <form className="space-y-5 mt-6">
       <div className="grid grid-cols-2 gap-4">
         <Input icon={RiTestTubeFill} label={"Test Name"} type={"text"} />
         <Input icon={IoPricetagsSharp} label={"Price"} type={"number"} />
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

export default UpdateTest;