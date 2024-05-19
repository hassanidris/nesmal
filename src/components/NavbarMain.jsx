import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { nesmalLogo } from "../constants/images";
import gsap from "gsap";

const NavbarMain = () => {
  const logoRef = useRef(null);
  useEffect(() => {
    const el = logoRef.current;
    gsap.fromTo(el, { x: -100, opacity: 0 }, { x: 0, duration: 2, opacity: 1 });
  }, []);
  return (
    <header className=" bg-white px-10 h-[90px] flex items-center  shadow-lg">
      <div className="wrapper max-w-[1290px] w-full m-auto flex justify-between items-center">
        <div className="left">
          <Link to="/">
            <img src={nesmalLogo} alt="logo" ref={logoRef} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
