import { Outlet } from "react-router-dom";
import NavbarTurkey from "./NavbarTurkey";
import Footer from "./Footer";

const TurkeyLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarTurkey />
      <div className=" flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default TurkeyLayout;
