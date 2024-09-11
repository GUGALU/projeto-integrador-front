import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      {/* Parte Superior */}
      <div className="bg-[#f2f2f2] py-6">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          <div className="p-4">
            <h3 className="font-bold mb-2">Coluna 1</h3>
            <p>Conteúdo da coluna 1</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Coluna 2</h3>
            <p>Conteúdo da coluna 2</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Coluna 3</h3>
            <p>Conteúdo da coluna 3</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Coluna 4</h3>
            <p>Conteúdo da coluna 4</p>
          </div>
        </div>
      </div>
      
      {/* Parte Inferior */}
      <div className="bg-[#d0d0d0] py-4">
        <div className="container mx-auto flex items-center justify-end space-x-4">
          <img
            src="/ifprimg2.svg" alt="First Image" className="h-8"/>
          <img
            src="/ifprimg1.svg" alt="Second Image" className="h-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;