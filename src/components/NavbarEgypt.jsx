import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { nesmalLogo } from "../constants/images";
import gsap from "gsap";

const NavbarEgypt = () => {
  const navRef = useRef();
  const logoRef = useRef(null);
  const menuRefs = useRef([]);
  menuRefs.current = [];

  useEffect(() => {
    const logo = logoRef.current;
    const menus = menuRefs.current;

    gsap.fromTo(
      logo,
      { x: -100, opacity: 0 },
      { x: 0, duration: 1, opacity: 1 }
    );

    gsap.fromTo(
      menus,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.4 }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el);
    }
  };

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
            to="/egypt"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
            ref={addToRefs}
          >
            Home
          </NavLink>
          <NavLink
            to="/egypt/egypt_about"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
            ref={addToRefs}
          >
            About
          </NavLink>
          <NavLink
            to="/egypt/egypt_contact"
            className="navLink mx-4 hover:text-gray-500"
            activeClassName="active"
            onClick={showNavbar}
            ref={addToRefs}
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
