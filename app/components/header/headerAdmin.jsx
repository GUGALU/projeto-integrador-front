import React from "react";
import { Menubar } from "primereact/menubar";
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { CiLogout } from "react-icons/ci";

export default function headerAdmin() {
  const IFPRItem = () => (
    <div className="flex w-full items-center justify-center p-4">
      <div className="flex w-full items-center justify-start relative">
        <div className="flex-shrink-0">
          <img
            src="https://certificados.paranavai.ifpr.edu.br/resources/img/paranavai-vertical.png"
            alt="IFPR"
            style={{ width: "auto", height: "70px" }}
          />
        </div>
        <h1 className="text-black text-4xl font-semibold absolute left-1/2 transform -translate-x-1/2">
          Sistema de Busca no Ambiente Acadêmico
        </h1>
      </div>
    </div>
  );
  
  const menu = [
    {
      label: "Home",
      icon: <FaHome />,
    },
    {
      label: "Projetos",
      icon: <GoProjectSymlink />,
    },
    {
      label: "Logout",
      icon: <CiLogout />,
    },
    {
      icon: <RiAdminFill className="text-4xl" />,
    },
  ];

  return (
    <div>
      <IFPRItem />
      <div className="card">
        <div className="">
          <Menubar model={menu} className="flex-1 bg-green-600" />
        </div>
      </div>
    </div>
  );
}
