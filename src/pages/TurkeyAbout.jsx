import React from "react";
import { getTurkeyData } from "../constants/data";
import { getImageURL } from "../utils/image-util";
import { Link, NavLink } from "react-router-dom";
import {
  nesmalLogo,
  turkeyAboutBanner,
  turkeyHomeImage,
} from "../constants/images";

const TurkeyAbout = () => {
  const data = getTurkeyData();

  return (
    <>
      <div className=" text-center p-12 bg-gray-200">
        <h2 className=" text-6xl font-bold uppercase">about nesmal turkey</h2>
        <p className=" capitalize mt-3 text-gray-500">
          <NavLink
            className=" underline text-gray-600 hover:text-gray-800"
            to="/"
          >
            Home
          </NavLink>
          {" / "}
          <NavLink
            className=" underline text-gray-600 hover:text-gray-800"
            to="/turkey"
          >
            turkey
          </NavLink>{" "}
          / about
        </p>
      </div>
      <div className=" max-w-[1290px] w-full m-auto">
        <div className=" w-full h-[400px]">
          <img
            className=" h-full w-full object-cover"
            src={turkeyAboutBanner}
            alt=""
          />
        </div>
        <div className="content flex flex-col sm:flex-row gap-10 px-4 my-10">
          <div className="left flex-[3]">
            <div>
              <h2 className=" text-3xl font-bold mb-3">
                NESMAL YATIRIM HOLDING
              </h2>
              <p className=" text-lg mb-4 leading-relaxed">
                Nesmal Yatırım Holding A.Ş. was established in April 2012 as a
                Turkey office of Nesma Holding Company. The aim of Nesmal
                Yatirim Holding is to invest in dynamic sectors in Turkey and
                establish a diversified strong investment portfolio.
              </p>
            </div>
            <div className=" mt-10">
              <h2 className=" text-3xl font-bold mb-3">
                MESSAGE FROM THE CHAIRMAN OF THE BOARD
              </h2>
              <p className=" text-lg mb-4 leading-relaxed">
                Based in Turkey, we draw on deep local knowledge and networks to
                identify and source promising investments in companies and
                projects in high-potential sectors and markets. We have a strong
                track record of growing our companies, adding value to our
                investments and delivering solid returns for our stakeholders.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                We see high potential for growth in Turkey, particularly in
                areas such as Religious tourism, and transportation, for both
                Cargo and Passengers. In line with that, our investment
                portfolio revolves around the Logistics and Transportation
                business. With subsidiary companies in Tourism, Freight
                Forwarding, Air Transport, Ocean Transport, Inland waterways,
                and Road transport, we are able to offer a complete logistical
                solution to our guests.
              </p>
              <p className=" text-lg mb-4 leading-relaxed">
                We look forward to strengthening our reputation for successfully
                carrying out unique investment opportunities, growing assets and
                delivering strong returns to our investors and shareholders.
              </p>
            </div>
          </div>
          <div className="right flex-1">
            <div className="logo w-36 m-auto mb-10">
              <img src={nesmalLogo} />
            </div>
            <div>
              <h3 className=" text-4xl mb-2 border-b-2 pb-2 border-green-700">
                Companies
              </h3>
              {data.map((company) => (
                <Link to={`/egypt/company/${company.id}`} key={company.id}>
                  <div className=" flex items-center gap-1 hover:bg-green-500 px-1 py-2">
                    <div className=" w-[30px]">
                      <img
                        className=" w-full h-auto"
                        src={getImageURL(company.logo)}
                      />
                    </div>
                    <p className=" text-sm">{company.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="address mt-10">
              <h3 className=" text-4xl mb-2 border-b-2 pb-2 border-green-700">
                Contact Us
              </h3>
              <h4 className=" font-bold">Nesmal Yatırım Holding A.Ş.</h4>
              <p className=" text-gray-500">
                Merdivenköy Mahallesi Bora Sokak, Nida Kule Göztepe, 25. kat,
                No:92 / Kadıköy/ Istanbul
              </p>
              <p className=" text-gray-500">
                <span className=" font-bold">Tel:</span> 0 216 343 02 40
              </p>
              <p className=" text-gray-500">
                <span className=" font-bold">Fax:</span> 0 216 530 07 83
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TurkeyAbout;
