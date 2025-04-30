import React from "react";
import { BsCoin } from "react-icons/bs";

const Navbar = ({ coin }) => {
  return (
    <div className="">
      <div className="navbar bg-base-100 border-b-2 border-gray-300 flex justify-between fixed opacity-90 top-0 z-10 w-11/12 mx-auto ">
        <div className="">
          <img src="/src/assets/logo.png" alt="A Logo Related to Cricket" />
        </div>
        <div className="">
          <button className="btn ml-3 text-gray-500">Home</button>
          <button className="btn ml-3 text-gray-500">Feature</button>
          <button className="btn ml-3 text-gray-500">Teams</button>
          <button className="btn ml-3 text-gray-500">Schedules</button>
          <button className="btn ml-3 border-gray-400 rounded-xl">
            ${coin} Coin <BsCoin className="text-amber-500 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
