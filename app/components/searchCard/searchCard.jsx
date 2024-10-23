"use client";

import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Crud from "../crud/CRUD";

export default function SearchCard() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: "Projeto 1",
      descricao: "Descrição do projeto 1.",
      colaboradores: ["João", "Mário", "José"],
      linguagem: "C/C++",
      repositorio: "https://github.com/projeto1",
    },
    {
      id: 2,
      titulo: "Projeto 2",
      descricao: "Descrição do projeto 2.",
      colaboradores: ["Ana", "Carlos", "Luísa"],
      linguagem: "JavaScript",
      repositorio: "https://github.com/projeto2",
    },
    {
      id: 3,
      titulo: "Projeto 3",
      descricao: "Descrição do projeto 3.",
      colaboradores: ["Pedro", "Roberta", "Marcos"],
      linguagem: "Python",
      repositorio: "https://github.com/projeto3",
    },
    {
      id: 4,
      titulo: "Projeto 4",
      descricao: "Descrição do projeto 4.",
      colaboradores: ["Fernanda", "Raul", "Clara"],
      linguagem: "Java",
      repositorio: "https://github.com/projeto4",
    },
    {
      id: 5,
      titulo: "Projeto 5",
      descricao: "Descrição do projeto 5.",
      colaboradores: ["Bruno", "Sofia", "Léo"],
      linguagem: "Ruby",
      repositorio: "https://github.com/projeto5",
    },
  ]);

  useEffect(() => {
    const storedArtefatos = JSON.parse(localStorage.getItem("artefatos"));

    if (Array.isArray(storedArtefatos)) {
      const artefatosFormatados = storedArtefatos.map((artefato, index) => ({
        id: projetos.length + index + 1, 
        titulo: artefato.titulo,
        descricao: artefato.tipo || "Sem descrição disponível",
        colaboradores: artefato.integrantes ? artefato.integrantes.split(",") : [],
        linguagem: "Não especificada", 
        repositorio: artefato.link || "#", 
      }));

      setProjetos((prevProjetos) => [...prevProjetos, ...artefatosFormatados]);
    }
    console.log("Retrieved artefatos:", storedArtefatos); // Debug log
    console.log("Retrieved projetos:", projetos); // Debug log
    
  }, []);

  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  return (
    <div className="w-full">
      <div>
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="p-card shadow-lg rounded-lg p-6 w-10/12 mx-auto bg-gray-50 border border-gray-300 mb-4"
          >
            <div className="flex justify-between">
              <div className="w-11/12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {projeto.titulo}
                </h2>
              </div>
              <div className="w-1/12 justify-end">
                <Button
                  onClick={openDialog}
                  icon="pi pi-pencil"
                  className="bg-green-800 text-white text-sm px-0.5 py-0.5 rounded-full"
                />
                <Dialog
                  visible={isDialogVisible}
                  style={{ height: "100vh", width: "100vw" }}
                  modal
                  onHide={closeDialog}
                >
                  <Crud />
                </Dialog>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">{projeto.descricao}</p>

            <div className="flex justify-between">
              <div className="w-9/12">
                {projeto.colaboradores &&
                  projeto.colaboradores.map((colaborador, idx) => (
                    <a
                      key={idx}
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="submit"
                        className="bg-gray-500 text-white text-sm px-0.5 py-0.5 ml-3 rounded-full"
                      >
                        <p className="px-1">{colaborador}</p>
                      </button>
                    </a>
                  ))}
              </div>

              <div className="flex w-2/12 justify-end">
                {projeto.repositorio && (
                  <a
                    href={projeto.repositorio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="submit"
                      className="bg-green-800 text-white text-sm px-0.5 py-0.5 rounded-full"
                    >
                      <p className="px-1">Repositório</p>
                    </button>
                  </a>
                )}
                <div className="bg-green-800 text-white text-sm px-0.5 py-0.5 ml-4 rounded-full flex items-center justify-center">
                  <p className="px-1">{projeto.linguagem}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
