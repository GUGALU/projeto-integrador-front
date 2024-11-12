import React from 'react';
import { Menubar } from 'primereact/menubar';
import { LuLogIn } from "react-icons/lu";
import { FaHome } from "react-icons/fa";




export default function BasicDemo() {
  const IFPRItem = () => (
    <span>
      <img
        src="https://certificados.paranavai.ifpr.edu.br/resources/img/paranavai-vertical.png"
        alt="IFPR"
        style={{ width:'auto', height: '70px' }}
      />
    </span>

  );
  const menu = [
    {
    
      //label: <IFPRItem/>
    
    },  

    {
      label:'Home', 
      icon: <FaHome/>,
      className: "text-white flex justify-center"

    },

    {
      label: 'Login ',
      icon: <LuLogIn/>,
      className: "ml-auto text-white"

    },

  ];

  return (

    <div>
      <IFPRItem/>
      <div className="card">
        <div className=''>

          <Menubar model={menu} className='flex-1 bg-green-500' />
        </div>
      
      </div>

    </div>
    
  )
}