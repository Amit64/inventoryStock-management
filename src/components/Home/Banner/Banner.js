import React from "react";
import Lottie from "react-lottie";
import {useNavigate} from "react-router-dom";
import HeroAnim from "../../../Assets/Lottie/HeroAnim.json";

const Banner = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: HeroAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className="text-gray-600 body-font bg-sky-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Inventory Management
           <br /> <span className="hidden lg:inline-block">For Medical Equipment</span>
          </h1>
          <p className="mb-8 leading-relaxed">
          The website addresses medical equipment inventory management, maintenance, and computerized maintenance management systems.The equipment inventory management system helps in keeping track of inventory that is required while performing equipment maintenance. It lets you know how much inventory is left in the stock so you can plan maintenance accordingly.
          </p>
          <div className="flex justify-center">
            <button onClick={()=>navigate("/about")} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              About us
            </button>
            <button onClick={()=>navigate("/manageinventory")} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Manage Inventory
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Lottie options={defaultOptions}></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Banner;
