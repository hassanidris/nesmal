import { Outlet } from "react-router-dom";
import NavbarMain from "./NavbarMain";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="">
      <NavbarMain />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
