import React from "react";
import banner from "../../../public/assets/banner-main.png"

const Banner = ({ handleAddToFreeCoin }) => {
  return (
    <div className="bg-black bg-gradient-to-tr from-indigo-200 via-black to-pink-200 mt-32 mb-24 rounded-4xl">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <div className="place-items-center">
              <img src={banner} alt="banner coming soon" />
            </div>
            <h1 className="text-4xl font-bold text-white mt-6">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="py-6 text-gray-300">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="border-lime-300 border py-2 w-44 mx-auto rounded-xl">
              <button
                onClick={handleAddToFreeCoin}
                className="btn bg-lime-300 text-black font-bold rounded-xl"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
