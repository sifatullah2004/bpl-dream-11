import React from "react";
import { CgProfile } from "react-icons/cg";

const Player = ({ player, handleSelectedPlayer }) => {
  const {
    name,
    country,
    country_flag_png,
    picture,
    rating,
    role,
    batting_style,
    bowling_style,
    price,
  } = player;
  return (
    <div>
      <div className="card p-4 bg-base-100 xl:w-96 lg:w-[300px] shadow-sm">
        <figure className="">
          <img
            className="w-full h-52 rounded-xl object-center"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body mt-4 p-0">
          <h2 className="card-title">
            <CgProfile className="text-2xl" />
            {name}
          </h2>
          <div className="flex justify-between border-b-2 border-gray-300 pb-5">
            <div className="flex items-center">
              <img className="w-6 h-4" src={country_flag_png} alt="" />
              <p className="ml-2 text-gray-500">{country}</p>
            </div>
            <h2 className="text-gray-700">{role}</h2>
          </div>
          <p className="font-semibold">Rating: {rating}</p>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">{batting_style}</h2>
            <h2 className="text-gray-600">{bowling_style}</h2>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Price: $ {price} </h2>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleSelectedPlayer(player)}
                className="btn bg-transparent border border-gray-300 rounded-xl shadow- hover:bg-lime-300"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
