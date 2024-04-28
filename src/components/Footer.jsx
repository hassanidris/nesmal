import React from "react";
import { nesmaLogo } from "../constants/images";

const Footer = () => {
  return (
    <div className=" bg-[#666666]  px-10 py-6 flex items-center text-white">
      <div className="wrapper max-w-[1290px] w-full m-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="left">All Rights Reserved. Copyright NESMAL.</div>
        <div className="right">
          <div className="logo flex items-center">
            <img src={nesmaLogo} alt="" />
            <span className=" text-sm ml-3">NESMA HOLDING GROUP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
