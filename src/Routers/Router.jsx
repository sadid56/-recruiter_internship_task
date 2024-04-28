import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Dashboard/Profile/Profile";
import DashboardLayout from "../pages/Dashboard/DashboardLayout/DashboardLayout";
import Invoices from "../pages/Dashboard/Invoices/Invoices";
import Reports from "../pages/Dashboard/Reports/Reports";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<LoginPage/>
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children: [
            {
                path:'/dashboard',
                element:<Profile/>
            },
            {
                path:'/dashboard/invoices',
                element:<Invoices/>
            },
            {
                path:"/dashboard/reports",
                element: <Reports/>
            }
        ]
    }
])

export default Router;