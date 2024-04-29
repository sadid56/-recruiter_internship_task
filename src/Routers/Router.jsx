import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Dashboard/Profile/Profile";
import DashboardLayout from "../pages/Dashboard/DashboardLayout/DashboardLayout";
import Invoices from "../pages/Dashboard/Invoices/Invoices";
import Reports from "../pages/Dashboard/Reports/Reports";
import EditeProfile from "../Components/EditProfile/EditeProfile";
import InvoiceEdite from "../Components/InvoiceEdite/InvoiceEdite";


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
            },
            {
                path:"/dashboard/edit-profile",
                element:<EditeProfile/>
            },
            {
                path: "/dashboard/invoice-edit/:id",
                element: <InvoiceEdite />,
                loader: ({ params }) => {
                  // Fetch the JSON data
                  return fetch(`/invoices.json`)
                    .then(response => response.json())
                    .then(data => {
                      // Find the invoice with the provided ID
                      const invoice = data.find(invoice => invoice.id === params.id);
                      return invoice;
                    })
                    .catch(error => {
                      console.error('Error fetching invoice:', error);
                      return null; 
                    });
                }
              }
              
        ]
    }
])

export default Router;