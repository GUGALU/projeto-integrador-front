import React from "react";
import { Menubar } from "primereact/menubar";
import { LuLogIn } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { Button } from "primereact/button";

export default function headerUser() {
  const IFPRItem = () => (
    <div className="flex w-full items-center p-4">
      <div className="">
        <img
          src="https://certificados.paranavai.ifpr.edu.br/resources/img/paranavai-vertical.png"
          alt="IFPR"
          style={{ width: "auto", height: "70px" }}
        />
      </div>
      <div>
        <h1 className="text-black text-4xl font-semibold absolute left-1/2 transform -translate-x-1/2">
          Sistema de Busca no Ambiente Acadêmico
        </h1>
      </div>
    </div>
  );

  return (
    <div className="flex w-full items-center justify-evenly p-4 border-b-2 border-green-600">
      <img
        src="https://certificados.paranavai.ifpr.edu.br/resources/img/paranavai-vertical.png"
        alt="IFPR"
        style={{ width: "auto", height: "70px" }}
      />
      <h1 className="text-black text-4xl font-semibold">
        Sistema de Busca no Ambiente Acadêmico
      </h1>
      <div className="flex items-center gap-2">
        <Button label="Home" icon={<FaHome />} className="gap-1 items-center" />
        <Button label="Login" icon={<LuLogIn />} className="gap-1 items-center" />
      </div>
    </div>
  );
}
