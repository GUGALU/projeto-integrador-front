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
    setArtefatoSelecionado(projeto);
    setIsDialogVisible(true);
  };

  const closeDialog = () => setIsDialogVisible(false);

  return (
    <div className="w-full bg-[#071D41] p-6 rounded-lg">
      <div>
        {projetos.map((projeto, index) => (
          <div key={index} className="p-card shadow-lg rounded-lg p-6 w-10/12 mx-auto bg-gray-700 border border-gray-600 mb-4">
            <h2 className="text-2xl font-bold text-green-300 mb-4">{projeto.titulo}</h2>
            <p className="text-sm text-gray-300 mb-6">{projeto.descricao}</p>

            <div className="flex justify-between">
              <Button
                onClick={() => openDialog(projeto)}
                icon="pi pi-pencil"
                className="bg-green-500 text-white text-sm px-0.5 py-0.5 rounded-full"
              />
              <Dialog
                visible={isDialogVisible}
                modal
                onHide={closeDialog}
                style={{ backgroundColor: '#1F2937', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', color: '#D1D5DB', zIndex: 1050 }}
              >
                <Crud artefatoParaEditar={artefatoSelecionado} fecharDialog={closeDialog} />
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
