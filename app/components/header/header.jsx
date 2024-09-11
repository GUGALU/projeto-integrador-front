import React from "react";
import { CiLogin } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-white w-full">
      <div className="flex justify-between w-10/12 mx-auto">
        <div className="flex gap-4">
          <img src="" className="h-4 w-4"/>
          <div className="text-black leading-normal">
            <strong>INSTITUTO FEDERAL</strong>
            <p>Paraná</p>
            <p>Educação a Distancia</p>
          </div>
        </div>

        <div className="text-black flex items-center">
          <CiLogin className="size-11" />
        </div>
      </div>
    </div>
  );
};

export default Header;
