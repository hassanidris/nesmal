import React, { useRef, useEffect } from "react";
import { getTurkeyData } from "../constants/data";
import CompanyCard from "../components/CompanyCard";
import { Link } from "react-router-dom";
import { turkeyBanner, turkeyHomeImage } from "../constants/images";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Turkey = () => {
  const dataT = getTurkeyData();
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
        <img
          className=" h-full w-full object-cover"
          src={turkeyBanner}
          alt=""
        />
      </div>
      <div className="wrapper max-w-[1290px] w-full m-auto mt-16 px-4">
        <div className=" mb-10">
          <h3 className="text-center text-3xl sm:text-[45px] tracking-[-1px] leading-relaxed">
            EXPLORE NESMAL TURKEY
          </h3>
          <h2 className="text-center text-4xl sm:text-[50px] font-bold tracking-[-1px] leading-relaxed">
            GROUP OF COMPANIES
          </h2>
          <hr className=" border-2 border-green-700" />
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-6">
          {dataT.map((company) => (
            <Link
              to={`/turkey/company/${company.id}`}
              className="card"
              ref={addToRefs}
            >
              <CompanyCard company={company} key={company.id} />
            </Link>
          ))}
        </div>
        <div className=" flex flex-col-reverse sm:flex-row gap-10 my-14">
          <div className="left flex-1">
            <h2 className=" text-3xl font-bold mb-4">About Nesmal Turkey</h2>
            <div className=" text-xl mb-4 tracking-wide leading-relaxed">
              <p>
                We look forward to strengthening our reputation for successfully
                carrying out unique investment opportunities, growing assets and
                delivering strong returns to our investors and shareholders.
              </p>
              <p>
                Nesmal Yatırım Holding A.Ş. was established in April 2012 as a
                Turkey office of Nesma Holding Company. The aim of Nesmal
                Yatirim Holding is to invest in dynamic sectors in Turkey and
                establish a diversified strong investment portfolio.
              </p>
            </div>
            <Link
              className=" bg-green-600 text-white border border-green-600 py-2 px-5 hover:bg-transparent hover:text-green-600"
              to="/turkey/turkey_about"
            >
              Read More
            </Link>
          </div>
          <div className="right flex-1">
            <img
              className=" h-full w-full object-cover"
              src={turkeyHomeImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Turkey;
