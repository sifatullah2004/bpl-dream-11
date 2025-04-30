import React, { useEffect, useState } from "react";

import Player from "../Player/Player";

const AvailablePlayers = ({ handleSelectedPlayer }) => {
  // fetching data
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-2xl font-bold pb-5">Available Players</h2>
      <div className="grid grid-cols-3 gap-y-4 gap-x-4">
        {players.map((player) => (
          <Player
            handleSelectedPlayer={handleSelectedPlayer}
            player={player}
            key={player.id}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
