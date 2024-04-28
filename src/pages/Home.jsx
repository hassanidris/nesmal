import React from "react";
import { Link } from "react-router-dom";
import { homeBanner } from "../constants/images";

const Home = () => {
  return (
    <section className=" relative flex justify-center items-center">
      <div className="image w-full h-full">
        <img
          className=" w-full h-[calc(100vh-150px)] object-cover"
          src={homeBanner}
          alt=""
          srcset=""
        />
      </div>
      <div className="overlay absolute flex flex-col justify-center items-center gap-8 py-8 px-16 bg-white/60 mb-16">
        <h1 className=" text-black text-3xl uppercase font-bold">
          Select your country
        </h1>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-32">
          <Link to="/egypt">
            <img src="../images/flag-egypt.webp" alt="" />
            <p className=" text-center text-xl uppercase mt-3 text-black">
              egypt
            </p>
          </Link>
          <Link to="/turkey">
            <img src="../images/flag-turkey.webp" alt="" />
            <p className=" text-center text-xl uppercase mt-3 text-black">
              turkey
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
