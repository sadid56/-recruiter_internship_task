import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex h-[100vh] items-center justify-center">
            <div className="text-center p-5 shadow-md rounded-md w-fit mx-auto space-y-3">
                <h2 className="text-5xl font-bold">Opps!</h2>
                <p className="text-xl font-medium">This page currently unavilable.</p>
                <div className="flex justify-center"><button className="btn bg-primary text-white" onClick={()=>navigate(-1)}>Go Back</button></div>
            </div>
        </div>
    );
};

export default ErrorPage;