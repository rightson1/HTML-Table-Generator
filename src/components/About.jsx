import React from "react";
import image from "../img/avatar.png"
const About = () => {
    return <>
        <a id="about"></a>
        <div className="flex p-8 items-center gap-4 h-[70vh]">

            <div className=" flex flex-col gap-4">
                <h1 className="text-4xl text-white opacity-80 font-bold">About  <span className="text-[fuchsia]"> Developer</span></h1>
                <p className="text-white opacity-75 font-light">This  website has been developed by Rightson Kirigha,Second year student Riara university </p>
            </div>
            <div className="hidden md:flex">
                <img src={image} alt="" />
            </div>

        </div>;
    </>
};

export default About;
