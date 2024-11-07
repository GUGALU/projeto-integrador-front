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

    },

    {
      label: 'Login ',
      icon: <LuLogIn/>,
      className: "ml-auto",

    },

  ];

  return (

    <div>
      <IFPRItem/>
      <div className="card">
        <div className='justify-between ml-auto'>
          <Menubar model={menu} className='flex-1' />
        </div>
      
      </div>

    </div>
    
  )
}