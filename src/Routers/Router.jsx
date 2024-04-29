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

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/invoices",
        element: <Invoices />,
      },
      {
        path: "/dashboard/reports",
        element: <Reports />,
      },
      {
        path: "/dashboard/edit-profile",
        element: <EditeProfile />,
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
      {
        path: "/dashboard/create-report",
        element: <CreateReport />,
      },
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
    ],
  },
]);

export default Router;
