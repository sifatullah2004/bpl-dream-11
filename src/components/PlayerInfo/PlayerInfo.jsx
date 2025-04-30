import { useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import Selected from "../Selected/Selected";
import { Bounce, ToastContainer, toast } from "react-toastify";

const PlayerInfo = ({
  handleActiveBtn,
  isActive,
  handleIncreaseBalance,
  coin,
  handleRetainingBalance,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayer.find((p) => p.id == player.id);
    if (player.price <= coin) {
      if (isExist) {
        toast.error("This player is already existed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        if (selectedPlayer.length >= 6) {
          toast.error("Only 6 players can be added", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        } else {
          handleIncreaseBalance(player.price);
          const newSelectedPlayers = [...selectedPlayer, player];
          setSelectedPlayer(newSelectedPlayers);
          toast.success(`Congratulate! ${player.name} now is in squad`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
      }
    } else {
      toast.error("You don't have enough money", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  // retaining balance
  const handleRetainBalance = (id) => {
    const player = selectedPlayer.find((p) => p.id == id);
    handleRetainingBalance(player.price);
  };

  // Delete function
  const handleDeletePlayer = (id) => {
    handleRetainBalance(id);
    const remainingSelectedPlayers = selectedPlayer.filter((p) => p.id != id);
    const deletedPlayer = selectedPlayer.find((p) => p.id == id);

    setSelectedPlayer(remainingSelectedPlayers);
    toast.warn(`${deletedPlayer.name} is removed from squad`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="pb-64">
      <div className="flex justify-end">
        <button
          onClick={() => handleActiveBtn("avail_players")}
          className={`${
            isActive.available
              ? "btn bg-lime-300 rounded-l-lg"
              : "btn rounded-l-xl"
          }`}
        >
          Available Players
        </button>
        <button
          onClick={() => handleActiveBtn("selected_players")}
          className={`${
            isActive.available
              ? "btn rounded-r-lg"
              : "btn bg-lime-300 rounded-r-xl"
          }`}
        >
          Selected ({selectedPlayer.length})
        </button>
      </div>

      {isActive.available ? (
        <AvailablePlayers
          handleSelectedPlayer={handleSelectedPlayer}
        ></AvailablePlayers>
      ) : (
        <Selected
          handleActiveBtn={handleActiveBtn}
          isActive={isActive}
          selectedPlayer={selectedPlayer}
          handleSelectedPlayer={handleSelectedPlayer}
          handleDeletePlayer={handleDeletePlayer}
        ></Selected>
      )}
    </div>
  );
};

export default PlayerInfo;
