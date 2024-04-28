import React from "react";
import { useParams } from "react-router-dom";
import { getEgyptData, getTurkeyData } from "../constants/data";
import { getImageURL } from "../utils/image-util";

const CompanyPage = () => {
  // Accessing the company ID from the URL params
  const { id } = useParams();
  console.log("companyId:", id);

  // Get the data based on the URL path
  const getData = () => {
    if (window.location.pathname.includes("/egypt")) {
      return getEgyptData();
    } else if (window.location.pathname.includes("/turkey")) {
      return getTurkeyData();
    }
    // Default to Egypt data if the path does not match either /egypt or /turkey
    return getEgyptData();
  };

  // Get the appropriate companies data
  const companies = getData();
  console.log("companies:", companies);

  // Finding the company object with the matching ID
  const company = companies.find((company) => company.id === parseInt(id));

  // Handling case when company is not found
  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <>
      <div className=" text-center p-12 bg-gray-200">
        <h2 className=" text-6xl font-bold uppercase">{company.name}</h2>
        {/* <p className=" capitalize mt-3 text-gray-500">
          <a
            className=" underline text-gray-600 hover:text-gray-800"
            href={`/`}
          >
            Home
          </a>
          {" / "}
          <a
            className=" underline text-gray-600 hover:text-gray-800"
            href={`/${company.country}`}
          >
            {company.country}
          </a>{" "}
          / {company.name}
        </p> */}
      </div>
      <div className=" max-w-[1290px] w-full m-auto">
        <div className=" w-full h-[400px]">
          <img
            className=" h-full w-full object-cover"
            src={getImageURL(company.imgBanner)}
            alt=""
          />
        </div>
        <div className="content flex flex-col sm:flex-row gap-16  sm:gap-10 px-4 my-10">
          <div className="left flex-[3]">
            <div>
              {company.description.map((item) => (
                <p key={item.id} className=" text-lg mb-4 leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
            {company.services && (
              <>
                <h2 className="text-5xl font-bold mt-10 mb-2">Our Services</h2>
                <ul>
                  {company.services.map((service, index) => (
                    <li
                      className=" list-disc list-outside py-2 ml-3 text-base leading-relaxed"
                      key={index}
                    >
                      {/* Render each service */}
                      <p className=" text-lg font-medium">{service.title}</p>
                      {service.details}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="right flex-1">
            <div className="logo w-56 sm:w-36 m-auto mb-10">
              <img
                className=" h-full w-full"
                src={getImageURL(company.logo)}
                alt={company.name}
              />
            </div>
            <div className="address">
              <h3 className=" text-4xl mb-2">Contact Us</h3>
              {company.address.map((address) => (
                <div
                  className=" border-t-2 border-green-700 mb-8 pt-2 text-sm"
                  key={company.id}
                >
                  <h4 className=" font-bold">{address.office}</h4>
                  <p className=" text-gray-500">{address.street}</p>
                  <div className=" flex text-gray-500">
                    <p className=" font-bold">Tel: </p>
                    <p>
                      {address.tel.map((tel, index) => (
                        <span className=" block" key={index}>
                          &nbsp;
                          {tel}
                        </span>
                      ))}
                    </p>
                  </div>
                  <p className=" text-gray-500">
                    <span className=" font-bold">Fax:</span> {address.fax}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 
      <div className=" max-w-[1290px] w-full m-auto">
        <div className=" w-full h-[400px]">
          <img
            className=" h-full w-full object-cover"
            src={getImageURL(company.imgBanner)}
            alt=""
          />
        </div>
        <div className="content flex">
          <div className="left flex-[3] border border-gray-500  h-10">
            {company.description.map((item) => (
              <p key={item.id} className=" text-base mb-4">
                {item}
              </p>
            ))}
          </div>
          <div className="right flex-1 border border-gray-500  h-10"></div>
        </div>
      </div> */}
    </>
  );
};

export default CompanyPage;
