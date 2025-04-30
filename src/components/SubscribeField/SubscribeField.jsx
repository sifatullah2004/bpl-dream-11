import React from "react";

const SubscribeField = () => {
  return (
    <div className="w-8/12 mx-auto absolute top-[-25%] left-1/6 border border-white p-4 rounded-2xl">
      <div className=" flex flex-col items-center py-20 gap-y-4 bg-gradient-to-tr from-blue-300 via-white to-yellow-100 rounded-2xl text-black">
        <h1 className="text-3xl font-bold">Subscribe to Our News Letter</h1>
        <p className="text-lg font-medium text-gray-400">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-x-1">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-md lg:w-96"
          />
          <button className="btn bg-gradient-to-l from-yellow-400 via-yellow-400 to-pink-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeField;
