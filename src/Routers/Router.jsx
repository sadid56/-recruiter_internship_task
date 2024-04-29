import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import Profile from "../pages/Dashboard/Profile/Profile";
import DashboardLayout from "../pages/Dashboard/DashboardLayout/DashboardLayout";
import Invoices from "../pages/Dashboard/Invoices/Invoices";
import Reports from "../pages/Dashboard/Reports/Reports";
import EditeProfile from "../Components/EditProfile/EditeProfile";
import InvoiceEdite from "../Components/InvoiceEdite/InvoiceEdite";
import CreateInvoices from "../Components/CreateInvoices/CreateInvoices";
import EditeReports from "../Components/EditeReports/EditeReports";
import CreateReport from "../Components/CreateReport/CreateReport";
import Branches from "../pages/Dashboard/Branches/Branches";
import CreateBranch from "../Components/CreateBranch/CreateBranch";
import EditBranch from "../Components/EditeBranch/EditBranch";


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
              },
              {
                path:"/dashboard/create-invoice",
                element:<CreateInvoices/>
              },
              {
                path:"/dashboard/edit-report/:name",
                element: <EditeReports/>,
                loader: ({ params }) => {
                    // Fetch the JSON data
                    return fetch(`/reports.json`)
                      .then(response => response.json())
                      .then(data => {
                        // Find the invoice with the provided ID
                        const reports = data.find(reports => reports.client_name === params.name);
                        return reports;
                      })
                      .catch(error => {
                        console.error('Error fetching reports:', error);
                        return null; 
                      });
                  }
              },
              {
                path:"/dashboard/create-report",
                element:<CreateReport/>
              },
              {
                path:"/dashboard/branches",
                element: <Branches/>
              },
              {
                path:"/dashboard/create-branch",
                element: <CreateBranch/>
              },
              {
                path: "/dashboard/edit-branch/:country",
                element: <EditBranch/>,
                loader: ({ params }) => {
                  // Fetch the JSON data
                  return fetch(`/branches.json`)
                    .then(response => response.json())
                    .then(data => {
                      const country = data.find(country => country.country === params.country);
                      return country;
                    })
                    .catch(error => {
                      console.error('Error fetching country:', error);
                      return null; 
                    });
                }

              }
              
        ]
    }
])

export default Router;