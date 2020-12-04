import React from "react";
import video from "../assets/rv.mp4";
import "../styles/Home.css";

import LoginForm from "./Forms/LoginForm";

const Home = () => {
  return (
    <div className="inset-0 absolute overflow-x-hidden">
      <div className="vid-container overflow-hidden">
        <video className="video" autoPlay muted loop src={video} />

        <div className="inset-0 absolute  bg-gray-900 bg-opacity-75 flex items-center justify-center space-x-12">
          <div className="w-1/2 ml-20 space-y-4">
            <h1 className="text-5xl text-green-500">
              Real vibes make the world move
            </h1>
            <p className="text-2xl text-gray-400 ">
              RealVibes is a platform that is inspired by other black creatives
              and black entrepreneurs around the world. This is a place where
              genuine energy is connected and shared amongst people. Get
              inspired by fashion, music, and business. The pre-requisite is{" "}
              <span className="text-green-500">RealVibes.</span>
            </p>
          </div>
          <div className="w-2/6 h-full pt-32">
            <LoginForm />
          </div>
        </div>
      </div>
      {/* start next div here */}
    </div>
  );
};
export default Home;
