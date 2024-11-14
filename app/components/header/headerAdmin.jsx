import React from 'react';
import { Menubar } from 'primereact/menubar';
import { FaHome } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { CiLogout } from "react-icons/ci";




export default function BasicDemo() {
    const IFPRItem = () => (
        <div className="flex w-full items-center justify-start p-4">
            <div className="flex items-center justify-center w-full relative">
                <div className="flex-shrink-0">
                    <img
                        src="https://certificados.paranavai.ifpr.edu.br/resources/img/paranavai-vertical.png"
                        alt="IFPR"
                        style={{ width: 'auto', height: '70px' }}
                    />
                </div>

                <h1 className="text-white text-4xl font-semibold absolute left-1/2 transform -translate-x-1/2">
                    Instituto Federal do Paraná
                </h1>
            </div>
        </div>

    );
    const menu = [

        {
            label: 'Home',
            icon: <FaHome />,
            className: "text-white flex justify-center"

        },

        {
            label: 'Projeto',
            icon: <GoProjectSymlink />,
            className: "text-white flex justify-center"

        },

        {
            label: 'Logout',
            icon: <CiLogout />,
            className:  "s"
        },

        {
            icon: <RiAdminFill />,
            className: ""

        }

    ];

    return (

        <div>
            <IFPRItem />
            <div className="card">
                <div className=''>

                    <Menubar model={menu} className='flex-1 bg-green-500' />
                </div>

            </div>

        </div>

    )
}