import React from "react";
import image from "../img/blob.png"
const Home = () => {
  return <>
    <a id="home"></a>
    <div className="flex p-8 items-center gap-4 h-[70vh]">
      <div className=" flex flex-col gap-4">
        <h1 className="text-4xl text-white opacity-80 font-bold">Easily Create HTML and JSX <span className="text-[fuchsia]"> Tables</span></h1>
        <p className="text-white opacity-75 font-light">This website enables you to easily create and style pure html and  JSX  tables.It is free to use </p>
      </div>
      <div className="hidden md:flex">
        <img src={image} alt="" />
      </div>

    </div>;
  </>
};

export default Home;
