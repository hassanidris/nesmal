import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Egypt from "./pages/Egypt/Egypt";

import EgyptCompany from "./pages/Egypt/EgyptCompany";
import EgyptContact from "./pages/Egypt/EgyptContact";
import Turkey from "./pages/Turkey/Turkey";
import TurkeyAbout from "./pages/Turkey/TurkeyAbout";
import TurkeyCompany from "./pages/Turkey/TurkeyCompany";
import TurkeyCareer from "./pages/Turkey/TurkeyCareer";
import TurkeyContact from "./pages/Turkey/TurkeyContact";
import EgyptLayout from "./components/EgyptLayout";
import MainLayout from "./components/MainLayout";
import TurkeyLayout from "./components/TurkeyLayout";
import CompanyPage from "./pages/CompanyPage";
import EgyptAbout from "./pages/EgyptAbout/EgyptAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },

  {
    path: "egypt",
    element: <EgyptLayout />,
    children: [
      {
        path: "",
        element: <Egypt />,
      },
      {
        path: "company/:id",
        element: <CompanyPage />,
      },
      {
        path: "/egypt_about",
        element: <EgyptAbout />,
      },
      {
        path: "egypt_contact",
        element: <EgyptContact />,
      },
    ],
  },
  {
    path: "turkey",
    element: <TurkeyLayout />,
    children: [
      {
        path: "",
        element: <Turkey />,
      },
      {
        path: "company/:id",
        element: <CompanyPage />,
      },
      {
        path: "turkey_about",
        element: <TurkeyAbout />,
      },
      {
        path: "turkey_career",
        element: <TurkeyCareer />,
      },
      {
        path: "turkey_contact",
        element: <TurkeyContact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
