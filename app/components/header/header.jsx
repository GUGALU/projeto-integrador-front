import React from 'react';
import { Menubar } from 'primereact/menubar';
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { CiLogout } from "react-icons/ci";




export default function BasicDemo() {
  const IFPRItem = () => (
    <div className="flex justify-start p-4">
      <img
        src="https://certificados.paranavai.ifpr.edu.br/resources/img/paranavai-vertical.png"
        alt="IFPR"
        style={{ width: 'auto', height: '70px' }}
      />
      <h1 className="text-black text-4xl font-semibold flex-grow text-center">Sistema de Busca no Ambiente Acadêmico</h1>

    </div>

  );
  const menu = [

    {
      label: 'Home',
      icon: <FaHome />,
      className: "text-white"

    },

    {
      label: 'Projetos',
      icon: <GoProjectSymlink />,
      className: "text-white flex justify-center"

    },

    {
      label: 'Logout',
      icon: <CiLogout />,
      className: "s"
    },

    {
      icon: <RiAdminFill className="text-4xl"/>,
      className: ""

    }

  ];

  return (

    <div>
      <IFPRItem />
      <div className="card">
        <div className=''>

          <Menubar model={menu} className='flex-1 bg-green-600' />
        </div>

      </div>

    </div>

  )
}