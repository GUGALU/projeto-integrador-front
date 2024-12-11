// SearchCard.js
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Crud from "../crud/crud";
import ArtefatoService from "../addFunction/addFuncion";

export default function SearchCard() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [projetos, setProjetos] = useState([]);
  const [artefatoSelecionado, setArtefatoSelecionado] = useState(null);

  useEffect(() => {
    const artefatosSalvos = ArtefatoService.getArtefatos();
    setProjetos(artefatosSalvos);
  }, []);

  const openDialog = (projeto) => {
    setArtefatoSelecionado(projeto); // Seleciona o artefato para edição
    setIsDialogVisible(true);
  };

  const closeDialog = () => setIsDialogVisible(false);

  return (
    <div className="w-full">
      <div>
        {projetos.map((projeto, index) => (
          <div key={index} className="p-card shadow-lg rounded-lg p-6 w-10/12 mx-auto bg-gray-50 border border-gray-300 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{projeto.titulo}</h2>
            <p className="text-sm text-gray-600 mb-6">{projeto.descricao}</p>

            <div className="flex justify-between">
              <Button
                onClick={() => openDialog(projeto)}
                icon="pi pi-pencil"
                className="bg-green-800 text-white text-sm px-0.5 py-0.5 rounded-full"
              />
              <Dialog visible={isDialogVisible} modal onHide={closeDialog}>
                <Crud artefatoParaEditar={artefatoSelecionado} fecharDialog={closeDialog} />
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
