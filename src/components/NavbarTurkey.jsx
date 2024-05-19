import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { nesmalLogo } from "../constants/images";
import gsap from "gsap";

const NavbarTurkey = () => {
  const navRef = useRef();

  const logoRef = useRef(null);
  useEffect(() => {
    const el = logoRef.current;
    gsap.fromTo(el, { x: -100, opacity: 0 }, { x: 0, duration: 2, opacity: 1 });
  }, []);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="  bg-white px-10 h-[90px] flex items-center justify-between shadow-lg ">
      <div className="navigation max-w-[1290px] w-full m-auto flex justify-between items-center">
        <div className="left">
          <Link to="/">
            <img src={nesmalLogo} alt="logo" ref={logoRef} />
          </Link>
        </div>
        <nav
          ref={navRef}
          className=" text-black text-xl uppercase flex items-center justify-center bg-white z-40"
        >
          <NavLink
            exact
            to="/turkey"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
          >
            Home
          </NavLink>
          <NavLink
            to="/turkey/turkey_about"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
          >
            About
          </NavLink>
          <NavLink
            to="/turkey/turkey_career"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
          >
            Career
          </NavLink>
          <NavLink
            to="/turkey/turkey_contact"
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

export default NavbarTurkey;
