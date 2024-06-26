import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Egypt from "./pages/Egypt";
import EgyptContact from "./pages/EgyptContact";
import Turkey from "./pages/Turkey";
import TurkeyAbout from "./pages/TurkeyAbout";
import TurkeyCareer from "./pages/TurkeyCareer";
import TurkeyContact from "./pages/TurkeyContact";
import EgyptLayout from "./components/EgyptLayout";
import MainLayout from "./components/MainLayout";
import TurkeyLayout from "./components/TurkeyLayout";
import CompanyPage from "./pages/CompanyPage";
import EgyptAbout from "./pages/EgyptAbout";

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
        path: "egypt_about",
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
