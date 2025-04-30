import React from "react";
import { MdDeleteForever } from "react-icons/md";

const SelectedPlayer = ({ player, handleDeletePlayer }) => {
  const { name, picture, role, price } = player;
  return (
    <div className="flex justify-between items-center mb-2 border border-gray-300 rounded-lg p-3">
      <div className="flex justify-around gap-x-3">
        <div>
          <img className="h-12 w-14 rounded-lg" src={picture} alt="" />
        </div>
        <div className="">
          <h2 className="font-semibold">{name}</h2>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <h2 className="">{role}</h2>
            <p className="ml-3">Price: {price} $</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleDeletePlayer(player.id)}
        className="btn bg-transparent border-0"
      >
        <MdDeleteForever className="text-red-500 text-4xl" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
