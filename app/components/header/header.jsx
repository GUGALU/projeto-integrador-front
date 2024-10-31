import React from 'react';
import { Menubar } from 'primereact/menubar';

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
    
      // label: <IFPRItem/>
    
    },  

    {
      label: 'Home',
      icon: 'pi pi-home'
    }
   

  ];

  return (

    <div>
      <IFPRItem/>
      <div className="card">
        <Menubar model={menu} />
      </div>

    </div>
    
  )
}