import { FaCalendar, FaPhone, FaUser, FaUserCircle } from "react-icons/fa";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
const EditeProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-5 mt-4 shadow-md rounded-md">
      <div className="text-xl flex items-center gap-3 font-medium w-full bg-primary text-white px-4 py-2 rounded-t-md">
        <button onClick={() => navigate(-1)} className="text-2xl">
          <MdArrowBack />
        </button>{" "}
        <span>Update Profile</span>
      </div>
      <div className="p-5">
        <form className="space-y-5 mt-6">
          {/* name */}
          <Input icon={FaUser} label={"Name"} type={"text"} />
          {/* email */}
          <Input icon={MdEmail} label={"Email"} type={"email"} />
          {/* phone number */}
          <Input icon={FaPhone} label={"Mobile"} type={"number"} />
          <div className="flex flex-col md:flex-row gap-3">
            {/* date of birth */}
            <Input icon={FaCalendar} label={"DOB"} type={"date"} />
            {/* profile picture */}
            <Input
              icon={FaUserCircle}
              label={"Profile Pic"}
              type={"file"}
            />{" "}
          </div>
          <button className="btn bg-primary text-white hover:bg-blue-900">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditeProfile;
