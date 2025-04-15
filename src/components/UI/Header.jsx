import React from "react";
import {Image} from "lucide-react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-600 text-center text-white py-3 text-lg font-bold flex justify-center items-center gap-2 shadow-md">
      <NavLink to="/" className="flex gap-2">
        <Image />
        <div>
          <span className="text-lg font-semibold">AI Image Enhancer</span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
