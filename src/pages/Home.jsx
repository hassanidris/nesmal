import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeBanner, flagEgypt, flagTurkey } from "../constants/images";
import gsap from "gsap";

const Home = () => {
  const flagRefs = useRef([]);
  flagRefs.current = [];

  useEffect(() => {
    const flags = flagRefs.current;

    gsap.fromTo(
      flags,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.5 }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !flagRefs.current.includes(el)) {
      flagRefs.current.push(el);
    }
  };
  return (
    <section className=" relative flex justify-center items-center">
      <div className="image w-full h-full">
        <img
          className=" w-full h-[calc(100vh-150px)] object-cover"
          src={homeBanner}
          alt=""
        />
      </div>
      <div className="overlay absolute flex flex-col justify-center items-center gap-8 py-8 px-16 bg-white/60 mb-16">
        <h1 className=" text-black text-3xl uppercase font-bold">
          Select your country
        </h1>
        <div className=" flex flex-col md:flex-row gap-12 md:gap-32">
          <Link to="/egypt" ref={addToRefs}>
            <img src={flagEgypt} alt="" />
            <p className=" text-center text-xl uppercase mt-3 text-black">
              egypt
            </p>
          </Link>
          <Link to="/turkey" ref={addToRefs}>
            <img src={flagTurkey} alt="" />
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
