import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Footer from "./components/Footer/Footer";
import {  ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

function App() {
  // coin adding
  const [coin, setCoin] = useState(0);
  const handleAddToFreeCoin = () => {
    const newCoins = coin + 60000000;
    setCoin(newCoins);
    toast.success('60000000 $ is added to card', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  // balance declining
  const handleIncreaseBalance = (price) => {
    setCoin(coin - price);
  };

  // balance retaining
  const handleRetainingBalance = (pr) => {
    const retainAmount = Number(pr);
    const balance = coin + retainAmount;
    setCoin(balance);
  };

  // toggle related
  const [isActive, setIsActive] = useState({
    available: true,
    status: "active",
  });

  const handleActiveBtn = (status) => {
    if (status == "avail_players") {
      setIsActive({
        available: true,
        status: "active",
      });
    } else {
      setIsActive({
        available: false,
        status: "active",
      });
    }
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Navbar coin={coin}></Navbar>
        <Banner handleAddToFreeCoin={handleAddToFreeCoin}></Banner>
        <PlayerInfo
          isActive={isActive}
          handleActiveBtn={handleActiveBtn}
          handleIncreaseBalance={handleIncreaseBalance}
          coin={coin}
          handleRetainingBalance={handleRetainingBalance}
        ></PlayerInfo>
        <Footer></Footer>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </>
  );
}

export default App;
