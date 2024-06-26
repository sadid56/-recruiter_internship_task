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
import Tests from "../pages/Dashboard/Tests/Tests";
import CreateTest from "../Components/CreateTest/CreateTest";
import UpdateTest from "../Components/UpdateTest/UpdateTest";
import Cultures from "../pages/Dashboard/Cultures/Cultures";
import CreateCulture from "../Components/CreateCulture/CreateCulture";
import EditCulture from "../Components/EditCulture/EditCulture";
import CultureOptions from "../pages/Dashboard/CultureOptions/CultureOptions";
import CreateCultureOptoin from "../Components/CreateCultureOption/CreateCultureOptoin";
import UpdateCultureOption from "../Components/UpdateCultureOption/UpdateCultureOption";
import Antibiotics from "../pages/Dashboard/Antibiotics/Antibiotics";
import CreateAntibiotics from "../Components/CreateAntibiotics/CreateAntibiotics";
import UpdateAntibiotic from "../Components/UpdateAntibiotic/UpdateAntibiotic";
import Doctors from "../pages/Dashboard/Doctor/Doctors";
import AddDoctor from "../Components/AddDoctor/AddDoctor";
import UpdateDoctor from "../Components/UpdateDoctor/UpdateDoctor";
import ListTests from "../pages/Dashboard/listTest/ListTests";
import ListCulture from "../pages/Dashboard/listCulture/ListCulture";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement:<ErrorPage/>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/edit-profile",
        element: <EditeProfile />,
      },
      //! invoice related
      {
        path: "/dashboard/invoices",
        element: <Invoices />,
      },
      {
        path: "/dashboard/reports",
        element: <Reports />,
      },
      
      {
        path: "/dashboard/invoice-edit/:id",
        element: <InvoiceEdite />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/invoices.json`)
            .then((response) => response.json())
            .then((data) => {
              // Find the invoice with the provided ID
              const invoice = data.find((invoice) => invoice.id === params.id);
              return invoice;
            })
            .catch((error) => {
              console.error("Error fetching invoice:", error);
              return null;
            });
        },
      },
      {
        path: "/dashboard/create-invoice",
        element: <CreateInvoices />,
      },
      {
        path: "/dashboard/edit-report/:name",
        element: <EditeReports />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/reports.json`)
            .then((response) => response.json())
            .then((data) => {
              // Find the invoice with the provided ID
              const reports = data.find(
                (reports) => reports.client_name === params.name
              );
              return reports;
            })
            .catch((error) => {
              console.error("Error fetching reports:", error);
              return null;
            });
        },
      },

      //! reports layout
      {
        path: "/dashboard/create-report",
        element: <CreateReport />,
      },

      //! branches  layout
      {
        path: "/dashboard/branches",
        element: <Branches />,
      },
      {
        path: "/dashboard/create-branch",
        element: <CreateBranch />,
      },
      {
        path: "/dashboard/edit-branch/:country",
        element: <EditBranch />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/branches.json`)
            .then((response) => response.json())
            .then((data) => {
              const country = data.find(
                (country) => country.country === params.country
              );
              return country;
            })
            .catch((error) => {
              console.error("Error fetching country:", error);
              return null;
            });
        },
      },
      // tests layout
      {
        path: "/dashboard/tests",
        element: <Tests />,
      },
      {
        path: "/dashboard/create-test",
        element: <CreateTest />,
      },
      {
        path: "/dashboard/edit-test/:test_name",
        element: <UpdateTest />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/tests.json`)
            .then((response) => response.json())
            .then((data) => {
              const tests = data.find(
                (tests) => tests.test_name === params.test_name
              );
              return tests;
            })
            .catch((error) => {
              console.error("Error fetching tests:", error);
              return null;
            });
        },
      },

      // culture layout
      {
        path: "/dashboard/cultures",
        element: <Cultures />,
      },
      {
        path: "/dashboard/create-culture",
        element: <CreateCulture />,
      },
      {
        path: "/dashboard/edit-culture/:name",
        element: <EditCulture />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/cultures.json`)
            .then((response) => response.json())
            .then((data) => {
              const culture = data.find(
                (culture) => culture.name === params.name
              );
              return culture;
            })
            .catch((error) => {
              console.error("Error fetching culture:", error);
              return null;
            });
        },
      },
      {
        path: "/dashboard/culture-options",
        element: <CultureOptions />,
      },
      {
        path: "/dashboard/create-culture-option",
        element: <CreateCultureOptoin />,
      },
      {
        path: "/dashboard/edit-culture-option/:name",
        element: <UpdateCultureOption />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/culture-option.json`)
            .then((response) => response.json())
            .then((data) => {
              const culture = data.find(
                (culture) => culture.name === params.name
              );
              return culture;
            })
            .catch((error) => {
              console.error("Error fetching culture:", error);
              return null;
            });
        },
      },

      // antibiotics layout
      {
        path: "/dashboard/antibiotics",
        element: <Antibiotics />,
      },
      {
        path: "/dashboard/create-antibiotic",
        element: <CreateAntibiotics />,
      },
      {
        path: "/dashboard/edit-antibiotic/:shortcut",
        element: <UpdateAntibiotic />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/antibiotics.json`)
            .then((response) => response.json())
            .then((data) => {
              const antibiotic = data.find(
                (antibiotic) => antibiotic.shortcut === params.shortcut
              );
              return antibiotic;
            })
            .catch((error) => {
              console.error("Error fetching antibiotic:", error);
              return null;
            });
        },
      },

      // doctor layout
      {
        path:'/dashboard/doctor',
        element:<Doctors/>
      },
      {
        path:"/dashboard/add-doctor",
        element:<AddDoctor/>
      },
      {
        path: "/dashboard/update-doctor/:name",
        element: <UpdateDoctor />,
        loader: ({ params }) => {
          // Fetch the JSON data
          return fetch(`/doctors.json`)
            .then((response) => response.json())
            .then((data) => {
              const doctor = data.find(
                (doctor) => doctor.name === params.name
              );
              return doctor;
            })
            .catch((error) => {
              console.error("Error fetching doctor:", error);
              return null;
            });
        },
      },

      // list layout
      {
        path:"/dashboard/list-test",
        element:<ListTests/>
      },
      {
        path:"/dashboard/list-culture",
        element:<ListCulture/>
      }
    ],
  },
]);

export default Router;
