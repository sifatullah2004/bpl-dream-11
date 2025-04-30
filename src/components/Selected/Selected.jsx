import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Selected = ({ selectedPlayer, handleActiveBtn, handleDeletePlayer }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold pb-5">
        Selected Players: ({selectedPlayer.length}/6)
      </h2>
      <div className="">
        {selectedPlayer.map((p) => (
          <SelectedPlayer
            handleDeletePlayer={handleDeletePlayer}
            player={p}
            key={p.id}
          ></SelectedPlayer>
        ))}
        <div className="border-violet-400 border w-[170px] rounded-xl p-1 mt-10">
          <button
            onClick={() => handleActiveBtn("avail_players")}
            className="btn bg-lime-300 rounded-lg"
          >
            Add More Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selected;
