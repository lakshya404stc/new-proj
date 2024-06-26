import React, { useState, useRef, useEffect } from "react";

const App = () => {
  return (
    <div className="w-full h-screen bg-white hide-scrollbar">
      <div className="relative w-[100vw]">
        <img
          src="./lander.png"
          className="w-[100vw] lg:h-full h-[300px] object-cover"
          alt="lander"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[99]">
          <img src="./hindi.png" className="max-w-[70vw]" />
          <img src="./text.png" className="max-w-[70vw]" />
          <button className="max-w-[60vw] bg-[#F45959] py-1 px-3 mt-8 text-white items-center flex justify-center rounded-md lg:text-xl shadow-lg">
            Explore
          </button>
        </div>
      </div>

      <div className="w-[100vw] h-fit">
        <div className="lg:flex justify-between w-[100vw] lg:h-[600px]">
          <div className="lg:w-[50vw] w-[100vw] flex items-center justify-center">
            <img
              src="img1.png"
              className="object-cover items-center justify-center px-10 lg:py-10 pt-10"
            />
          </div>

          <div className="lg:w-[50vw] w-full relative">
            <img src="./meshRight.png" className="w-full object-cover" />
            <div className="lg:gap-7 absolute top-0 w-full h-full flex flex-col items-center lg:items-end lg:pe-[100px] justify-center z-[99] gap-2 py-[50px]">
              <div className="text-2xl md:text-4xl font-bold">Lorem ipsum </div>
              <div className="text-md md:text-xl lg:text-right font-base max-w-full text-center lg:px-0 px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla.
              </div>
              <button className="max-w-[60vw] bg-[#F45959] py-1 px-3 text-white items-center flex justify-center rounded-md lg:text-xl shadow-lg">
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="w-[100vw] h-fit hidden lg:block">
        <div className="lg:flex justify-between w-[100vw] lg:h-[600px]">

          <div className="lg:w-[50vw] w-full relative">
            <img src="./meshRight.png" className="w-full object-cover transform -scale-x-100" />
            <div className="lg:gap-7 absolute top-0 w-full h-full flex flex-col items-center lg:items-start lg:ps-[100px] justify-center z-[99] gap-2 py-[50px]">
              <div className="text-2xl md:text-4xl font-bold">Lorem ipsum </div>
              <div className="text-md md:text-xl lg:text-left font-base max-w-full text-center lg:px-0 px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla.
              </div>
              <button className="max-w-[60vw] bg-[#F45959] py-1 px-3 text-white items-center flex justify-center rounded-md lg:text-xl shadow-lg">
                Read More
              </button>
            </div>
          </div>

          <div className="lg:w-[50vw] w-[100vw] flex items-center justify-center">
            <img
              src="img2.png"
              className="object-cover items-center justify-center px-10 lg:py-10"
            />
          </div>
        </div>
      </div>

      <div className="w-[100vw] h-fit block lg:hidden">
        <div className="lg:flex justify-between w-[100vw] lg:h-[600px]">
          <div className="lg:w-[50vw] w-[100vw] flex items-center justify-center">
            <img
              src="img2.png"
              className="object-cover items-center justify-center px-10 lg:py-10 pt-0"
            />
          </div>

          <div className="lg:w-[50vw] w-full relative">
            <img src="./meshRight.png" className="w-full object-cover" />
            <div className="lg:gap-7 absolute top-0 w-full h-full flex flex-col items-center lg:items-end lg:pe-[100px] justify-center z-[99] gap-2 py-[50px]">
              <div className="text-2xl md:text-4xl font-bold">Lorem ipsum </div>
              <div className="text-md md:text-xl lg:text-right font-base max-w-full text-center lg:px-0 px-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla.
              </div>
              <button className="max-w-[60vw] bg-[#F45959] py-1 px-3 text-white items-center flex justify-center rounded-md lg:text-xl shadow-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
