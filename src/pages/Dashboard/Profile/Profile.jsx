import { Link } from "react-router-dom";
import "./Profile.css";
import { FaEdit } from "react-icons/fa";

const Profile = () => {
    // fake user data
  const data = [
    { label: "Name", value: "John Wick" },
    { label: "Email", value: "example@gmail.com" },
    { label: "Phone", value: "+88 01739859756" },
    { label: "DOB", value: "11-25-2003" },
  ];
  return (
    <div className="mt-5 flex flex-col md:flex-row items-center justify-evenly mx-3 shadow-md p-5 rounded-md gap-5">
        {/* user profile image */}
      <div className="profile-card relative">
        <img
          className="object-cover w-full h-full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="Profile"
        />
      </div>

      <div>
        <h1 className="text-3xl border-b border-primary w-fit font-semibold mb-10">
          My <span className="text-primary">Profile</span>
        </h1>
        {/* user details */}
        <ul className="space-y-3">
          {data.map((item, index) => (
            <li key={index} className="text-xl font-medium">
              <span className="text-primary">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
        {/* update user */}
        <div className="flex justify-end mt-5">
          <Link to="/dashboard/edit-profile" className="btn bg-primary text-white text-xl">
            <FaEdit />
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
