import React from "react";

const Navbar = () => {
    return <div className="text-white flex z-10 justify-between h-[80px] px-2 md:px-8 items-center w-full sticky top-0 left-0 bg-black">
        <h1 className="text-[fuchsia]text-[fuchsia] text-xl font-semibold md:text-2xl">Rightson.</h1>
        <ul className=" justify-end  flex  gap-4 flex-row-reverse">
            {/* <li className="px-4 py-2]">Home</li> */}
            <li className="px-3 md:px-4 py-2 border rounded-full cursor-pointer"><a href="#about">About</a></li>
            <li className="px-3 md:px-4 py-2 border rounded-full cursor-pointer"><a href="#tables">Tables</a></li>

            <li className="px-3 md:px-4 py-2 border rounded-full cursor-pointer"><a href="#home">Home</a></li>
        </ul>

    </div>;
};

export default Navbar;
