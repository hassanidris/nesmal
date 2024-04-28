import React from "react";
import { getImageURL } from "../utils/image-util";
import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  return (
    <div className=" relative rounded overflow-hidden shadow-lg">
      <img src={getImageURL(company.imgThumb)} alt={company.name} />
      <div className=" absolute w-full h-full p-3 top-0 left-0 z-10 flex justify-start items-end bg-gradient-to-t from-black/60 to-black/0 ">
        <div>
          <h3 className=" text-white text-lg font-semibold capitalize">
            {company.name}
          </h3>
          <p className=" text-white text-sm">{company.sector}</p>
        </div>
        <div className=" absolute opacity-0 hover:opacity-100 hover:bg-green-700 w-full h-full p-3 top-0 left-0 z-20 flex justify-center items-center">
          <div className=" w-48 h-48 flex justify-center items-center">
            <img
              className=""
              src={getImageURL(company.logoWhite)}
              alt={company.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
