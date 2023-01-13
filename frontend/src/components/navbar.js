import React from "react";
import Button from "./button";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white w-full h-[64px] shadow shadow-sasakazi-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto pt-4">
          <p className="text-3xl font-bold">
            <span className="text-sasakazi-blue">Daily</span>
            <span className="text-sasakazi-sky-blue">Jokes</span>
          </p>
          <p className="text-sasakazi-black text-[20px]">
            Signup For Your Daily Top Jokes
          </p>
          <div className="flex flex-row">
            <Button buttonText="Sign in" />
            <Button buttonText="Sign up" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
