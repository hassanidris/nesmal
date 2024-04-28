import React from "react";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  return (
    <header className=" bg-white px-10 h-[90px] flex items-center  shadow-lg">
      <div className="wrapper max-w-[1290px] w-full m-auto flex justify-between items-center">
        <div className="left">
          <Link to="/">
            <img src="../images/logoNesmal.webp" alt="" srcset="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
