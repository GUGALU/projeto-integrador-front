"use client";

import React, { useState } from "react";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { Chip } from "primereact/chip";
import { Dialog } from "primereact/dialog";

export default function SearchCard() {
  const [user, setUser] = useState(false);
  const [selectedProjeto, setSelectedProjeto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projetos = [
    {
      id: 1,
      id: 1,
      titulo: "Projeto 1",
      descricao: "Descrição do projeto 1. Lorem ipsum dolor sit amet.",
      colaboradores: ["João", "Mário", "José"],
      tipoArtefato: ["Código fonte", "Documentação"],
    },
    {
      id: 2,
      id: 2,
      titulo: "Projeto 2",
      descricao: "Lorem",
      colaboradores: ["João", "Mário", "José"],
      tipoArtefato: ["Código fonte", "Documentação"],
    },
    {
      id: 3,
      id: 3,
      titulo: "Projeto 3",
      descricao: "Descrição do projeto 3. Lorem ipsum dolor sit amet.",
      colaboradores: ["João", "Mário", "José"],
      tipoArtefato: ["Código fonte", "Documentação"],
    },
    {
      id: 4,
      id: 4,
      titulo: "Projeto 4",
      descricao: "Descrição do projeto 4. Lorem ipsum dolor sit amet.",
      colaboradores: ["João", "Mário", "José"],
      tipoArtefato: ["Código fonte", "Documentação"],
    },
    {
      id: 5,
      id: 5,
      titulo: "Projeto 5",
      descricao: "Descrição do projeto 5. Lorem ipsum dolor sit amet.",
      colaboradores: ["João", "Mário", "José"],
      tipoArtefato: ["Código fonte", "Documentação"],
    },
  ];

  const openModal = (projeto) => {
    setSelectedProjeto(projeto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProjeto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            onClick={() => openModal(projeto)}
            className="cursor-pointer shadow-lg rounded-lg p-4 w-full bg-white border border-gray-300 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {projeto.titulo}
              </h2>
              {user && (
                <div className="gap-2 flex items-center">
                  <Button
                    className="bg-blue-600 text-white p-2 text-sm rounded-full hover:bg-blue-700"
                    aria-label="Editar"
                  >
                    <LuPencil />
                  </Button>
                  <Button
                    className="bg-red-600 text-white p-2 text-sm rounded-full hover:bg-red-700"
                    aria-label="Excluir"
                  >
                    <FaRegTrashAlt />
                  </Button>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-4">
              {projeto.descricao.length > 50
                ? `${projeto.descricao.slice(0, 50)}...`
                : projeto.descricao}
              {projeto.descricao.length > 50 && (
                <button className="text-blue-500 hover:underline ml-2">
                  Ver mais
                </button>
              )}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 flex-wrap">
                {projeto.colaboradores.map((colaborador, index) => (
                  <Chip
                    label={colaborador}
                    key={index}
                    className="bg-blue-100 p-2 rounded-md text-blue-800"
                  />
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {projeto.tipoArtefato.map((tipo, index) => (
                  <Tag
                    value={tipo}
                    text
                    key={index}
                    className="bg-green-100 p-2 rounded-md text-green-800 border-green-400"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        visible={isModalOpen}
        onHide={closeModal}
        header={selectedProjeto?.titulo}
        modal
        style={{ width: "50vw" }}
        className="p-dialog-overlay bg-white p-2 rounded-lg"
      >
        {selectedProjeto && (
          <div className="bg-white p-4">
            <p className="text-sm text-gray-600 mb-4">
              {selectedProjeto.descricao}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 flex-wrap">
                <strong>Colaboradores:</strong>
                {selectedProjeto.colaboradores.map((colaborador, index) => (
                  <Chip
                    label={colaborador}
                    key={index}
                    className="bg-blue-100 p-2 rounded-md text-blue-800"
                  />
                ))}
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                <strong>Artefatos:</strong>
                {selectedProjeto.tipoArtefato.map((tipo, index) => (
                  <Tag
                    value={tipo}
                    text
                    key={index}
                    className="bg-green-100 p-2 rounded-md text-green-800 border-green-400"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </Dialog>
      <style jsx global>{`
        .p-dialog-mask {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}
