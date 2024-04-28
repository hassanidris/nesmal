import { Outlet } from "react-router-dom";
import NavbarEgypt from "./NavbarEgypt";
import Footer from "./Footer";

const EgyptLayout = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      <NavbarEgypt />
      <div className=" flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default EgyptLayout;
