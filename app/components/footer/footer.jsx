import React from "react";
import "primeicons/primeicons.css";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#f2f2f2]">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          <div className="p-4">
            <h3 className="font-bold mb-2">Nossos Cursos</h3>
            <a
              href="https://ifpr.edu.br/paranavai/cursos-tecnicos-integrados/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Cursos Tecnicos Integrados
            </a>
            <p />
            <a
              href="https://ifpr.edu.br/paranavai/cursos-tecnicos-subsequentes/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Cursos Técnicos Subsequentes
            </a>
            <p />
            <a
              href="https://ifpr.edu.br/paranavai/cursos-de-pos-graduacao/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Cursos de Pós-Graduação
            </a>
            <p />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Redes Sociais</h3>
            <div className="flex gap-2 items-center">
              <i className="pi pi-facebook" />
              <a
                href="https://www.facebook.com/ifprparanavai/"
                className="text-green-600 hover:underline transition-colors ease-in-out"
              >
                Facebook
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="pi pi-youtube" />
              <a
                href="https://www.youtube.com/conexaoifpr"
                className="text-green-600 hover:underline transition-colors ease-in-out"
              >
                Youtube
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="pi pi-instagram" />
              <a
                href="https://www.instagram.com/ifpr_pvai/"
                className="text-green-600 hover:underline transition-colors ease-in-out"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Fale Conosco</h3>
            <a
              href="https://ifpr.edu.br/paranavai/fale-conosco/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Fale Conosco
            </a>
            <p />
            <a
              href="https://ifpr.edu.br/institucional/orgaos-de-controle/ouvidoria/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Ouvidoria
            </a>
            <p />
          </div>
          <div className="p-4">
            <h3 className="font-bold mb-2">Privacidade</h3>
            <a
              href="https://ifpr.edu.br/politica-de-privacidade/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Política de Privacidade
            </a>
            <p />
            <a
              href="https://ifpr.edu.br/politica-de-cookies/"
              className="text-green-600 hover:underline transition-colors ease-in-out"
            >
              Política de Cookies
            </a>
            <p />
          </div>
        </div>
      </div>
      <div className="text-center flex items-center gap-6 bg-[#f2f2f2] py-6 mx-auto justify-center">
        <p>
          IFPR Campus Paranavaí – Rua José Felipe Tequinha, 1400 – Jardim das
          Nações | Paranavaí – PR – Brasil | CEP 87703-536 | Telefones: Recepção
          (44) 3482-0110 – Secretaria Acadêmica (44) 3482-0111
        </p>
        <img
          src="/assets/images/ifprimg1.svg"
          alt="Second Image"
          className="h-8"
        />
        <img
          src="/assets/images/ifprimg2.svg"
          alt="First Image"
          className="h-8"
        />
      </div>
    </footer>
  );
};

export default Footer;
