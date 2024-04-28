import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const NavbarEgypt = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="  bg-white px-10 h-[90px] flex items-center justify-between shadow-lg ">
      <div className="navigation max-w-[1290px] w-full m-auto flex justify-between items-center">
        <div className="left">
          <Link to="/">
            <img src="../images/logoNesmal.webp" alt="logo" />
          </Link>
        </div>
        <nav
          ref={navRef}
          className=" text-black text-xl uppercase flex items-center justify-center bg-white z-40"
        >
          <NavLink
            exact
            to="/egypt"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
          >
            Home
          </NavLink>
          <NavLink
            to="/egypt/egypt_about"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
          >
            About
          </NavLink>
          <NavLink
            to="/egypt/egypt_contact"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
          >
            Contact
          </NavLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <IoMdClose size={30} />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <IoMdMenu size={30} />
        </button>
      </div>
    </header>
  );
};

export default NavbarEgypt;
