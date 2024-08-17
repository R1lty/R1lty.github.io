import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const redirectToAviasales = () => {
    window.location.href = "https://www.aviasales.ru";
  };
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/egor_martjanov/";
  };
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4 ">
          <p
            onClick={redirectToAviasales}
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer"
          >
            Aviasales
          </p>
          <p
            onClick={redirectToInstagram}
            className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer"
          >
            Instagram
          </p>
        </div>
      </div>
      <div className="flex item-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">•</p>
        {/* <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </p> */}
      </div>
    </>
  );
};

export default NavBar;
