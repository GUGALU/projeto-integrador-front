"use client";

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import React from 'react';

export default function SearchCard() {
  return (
    <div className="bg-gray-800 w-full">

      <div className="p-card shadow-lg rounded-lg p-6 w-10/12 mx-auto bg-gray-50 border border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Título do Projeto</h2>
        <p className="text-sm text-gray-600 mb-6 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae maxime ipsum minima? Labore sed laudantium at, unde reprehenderit itaque voluptas deleniti voluptatem dolor sequi laboriosam repellat sapiente, nobis delectus beatae.</p>

        <div className='flex '>
          <div className='w-8/12'>
            <a href="https://github.com/" target="_blank">
              <button type="submit" className="bg-gray-500 text-white text-sm px-0.5 py-0.5 ml-3 rounded-full">
                João
              </button>
            </a>
            <a href="https://github.com/" target="_blank">
              <button type="submit" className="bg-gray-500 text-white text-sm px-0.5 py-0.5 ml-3 rounded-full">
                Mário
              </button>
            </a>
            <a href="https://github.com/" target="_blank">
              <button type="submit" className="bg-gray-500 text-white text-sm px-0.5 py-0.5 ml-3 rounded-full">
                José
              </button>
            </a>
          </div>
          
          <div className='flex w-2/12'>
            <a href="https://github.com/" target="_blank">
              <button type="submit" className="bg-green-800 text-white text-sm px-0.5 py-0.5 rounded-full">
                Repositório
              </button>
            </a>

            
            <div className="bg-green-800 text-white text-sm px-0.5 py-0.5 ml-4 rounded-full flex items-center justify-center">
                C/C++
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
