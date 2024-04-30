import { useState } from "react";
import Input from "../../Components/Input/Input";
import img from "../../assets/image/image-1.jpg";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const navigate = useNavigate()

  //! Reminder:  this is a  not perfect login  method
    // login now
    const handleLogin = (e) => {
      e.preventDefault();
     if(email === "admin@gmail.com" && password === "1234"){
        toast.success("Login  success!")
        navigate("/dashboard/profile")
     }else{
        return toast.error("Wrong Address!", {
            position:"top-right",
            duration: 2000
        })
     }
    };
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      {/* login form */}
      <div className="flex-1 relative bg-[#d6d6d6]">
        <form onSubmit={handleLogin}
          style={{ boxShadow: "0px 0px 50px #d9cece" }}
          className="w-[70%] bg-white space-y-3 p-5 md:p-10 rounded-md absolute md:top-[30%] -top-10 md:-right-10 right-[15%]">
          <Input
            icon={MdEmail}
            label={"Email"}
            type={"email"}
            name={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={RiLockPasswordLine}
            label={"Password"}
            type={"password"}
            name={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn text-[18px] bg-primary hover:bg-blue-700 w-full text-white">
            Login
          </button>
          <div>
          <p>Email: admin@gmail.com</p>
          <p>password: 1234</p>
          </div>
        </form>
      </div>
      {/* side content */}
      <div
        className="hero flex-1 h-screen"
        style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center md:text-start text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome <span className="text-primary">SHREYU!</span>
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              illo ex nisi architecto doloribus vitae culpa rem repudiandae
              deleniti minus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
