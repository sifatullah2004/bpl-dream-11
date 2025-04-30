import React from "react";
import SubscribeField from "../SubscribeField/SubscribeField";

const Footer = () => {
  return (
    <div className="pt-48 bg-black text-white relative">
      <div className="flex justify-center"><img className="" src="/src/assets/logo-footer.png" alt="" /></div>
      <footer className="footer grid grid-cols-3 sm:footer-horizontal p-10 mb-24">
        <nav>
          <h6 className=" text-white font-semibold">About us</h6>
          <p className="w-56 text-gray-400">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav>
          <h6 className=" text-white font-semibold">Quick Links</h6>
          <a className="link link-hover text-gray-400">Home</a>
          <a className="link link-hover text-gray-400">Service</a>
          <a className="link link-hover text-gray-400">About</a>
          <a className="link link-hover text-gray-400">Contact</a>
        </nav>
        <form>
          <h6 className="text-white font-semibold">Subscribe</h6>
          <fieldset className="text-left">
            <label className="text-gray-400 text-left">Subscribe to our newsletter for the latest updates.</label>
            <div className="join mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered join-item text-black rounded-l-lg"
              />
              <button className="btn btn-primary join-item bg-gradient-to-r from-yellow-400 via-yellow-400 to-pink-400 text-black rounded-r-lg">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="text-center text-gray-400 font-semibold">&copy; All Rights Reserved</p>
      <SubscribeField></SubscribeField>
    </div>
  );
};

export default Footer;
