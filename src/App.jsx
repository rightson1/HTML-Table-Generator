import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Tables from "./components/Tables";
import About from "./components/About";

const App = () => {
    return <div className="bg-black h-screen w-screen overflow-x-hidden">
        <Navbar />
        <Home />
        <Tables />
        <About />
    </div>;
};

export default App;
