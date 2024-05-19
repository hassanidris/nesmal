import React, { useRef, useEffect } from "react";
import { getEgyptData } from "../constants/data";
import CompanyCard from "../components/CompanyCard";
import { Link } from "react-router-dom";
import { egyptBanner, qouteIcon } from "../constants/images";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Egypt = () => {
  const data = getEgyptData();
  const companyRefs = useRef([]);
  companyRefs.current = [];

  useEffect(() => {
    const companies = companyRefs.current;

    gsap.fromTo(
      companies,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          scrub: 1,
          trigger: companies[0].parentNode,
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !companyRefs.current.includes(el)) {
      companyRefs.current.push(el);
    }
  };

  return (
    <>
      <div className="banner w-full h-[65vh]">
        <img className=" h-full w-full object-cover" src={egyptBanner} alt="" />
      </div>
      <div className="wrapper max-w-[1290px] w-full m-auto mt-16">
        <div className=" mb-10">
          <h3 className="text-center text-[45px] tracking-[-1px]">
            EXPLORE NESMAL EGYPT
          </h3>
          <h2 className="text-center text-[50px] font-bold tracking-[-1px]">
            GROUP OF COMPANIES
          </h2>
          <hr className=" border-2 border-green-700" />
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-6">
          {data.map((company) => (
            <Link
              to={`/egypt/company/${company.id}`}
              className="card"
              key={company.id}
              ref={addToRefs}
            >
              <CompanyCard company={company} />
            </Link>
          ))}
        </div>
      </div>
      <div className=" bg-gray-200 mt-12 py-12 px-6">
        <div className="max-w-[1290px] w-full m-auto  flex flex-col justify-center items-center gap-8">
          <img src={qouteIcon} />
          <p className=" text-center text-2xl italic font-thin">
            All our companies are managed and monitored by Nesmal Investment
            Company. Nesmal is constantly looking for new investment
            opportunities in Egypt.
          </p>
          <div className=" text-center">
            <h3 className=" text-3xl font-normal">Ashraf Lamloum</h3>
            <p className=" text-3xl text-gray-500 font-thin">
              CEO Nesmal, Egypt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Egypt;
