"use client";

import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import ArtefatoService from "../addFunction/addFuncion";

export default function Crud({ artefatoParaEditar, fecharDialog }) {
  const [artefato, setArtefato] = useState({
    titulo: "",
    autor: "",
    integrantes: "",
    link: "",
    tipo: null,
    palavrasChave: "",
  });
  const [artefatos, setArtefatos] = useState([]);
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  useEffect(() => {
    if (artefatoParaEditar) {
      setArtefato(artefatoParaEditar);
    } else {
      setArtefato({
        titulo: "",
        autor: "",
        integrantes: "",
        link: "",
        tipo: null,
        palavrasChave: "",
      });
    }
  }, [artefatoParaEditar]);

  useEffect(() => {
    const artefatosSalvos = ArtefatoService.getArtefatos();
    setArtefatos(artefatosSalvos);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtefato((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (e) => {
    setArtefato((prev) => ({ ...prev, tipo: e.value }));
  };

  const handleSaveArtefato = () => {
    if (artefato.titulo && artefato.autor && artefato.link && artefato.tipo) {
      if (artefatoParaEditar) {
        ArtefatoService.atualizarArtefato(artefato);
      } else {
        ArtefatoService.adicionarArtefato({ ...artefato, id: Date.now() });
      }
      setArtefatos(ArtefatoService.getArtefatos());
      setMensagemSucesso("Salvo com sucesso!");
      fecharDialog();
    }
  };

  const handleCancelar = () => {
    setArtefato({
      titulo: "",
      autor: "",
      integrantes: "",
      link: "",
      tipo: null,
      palavrasChave: "",
    });
    fecharDialog();
  };

  const tiposArtefato = [
    { label: "Artigo", value: "artigo" },
    { label: "Projeto", value: "projeto" },
    { label: "Repositório", value: "repositorio" },
    { label: "Diagrama", value: "diagrama" },
  ];

  return (
    <div className="p-4 w-full bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-semibold mb-5 text-green-400">Editar Artefato</h2>

      {mensagemSucesso && <p className="text-green-500 mb-3">{mensagemSucesso}</p>}

      <div className="mb-4">
        <label htmlFor="titulo" className="text-gray-300">Título</label>
        <InputText
          id="titulo"
          name="titulo"
          value={artefato.titulo}
          onChange={handleInputChange}
          className="w-full bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="autor" className="text-gray-300">Autor</label>
        <InputText
          id="autor"
          name="autor"
          value={artefato.autor}
          onChange={handleInputChange}
          className="w-full bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="integrantes" className="text-gray-300">Integrantes</label>
        <InputText
          id="integrantes"
          name="integrantes"
          value={artefato.integrantes}
          onChange={handleInputChange}
          className="w-full bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="link" className="text-gray-300">Link</label>
        <InputText
          id="link"
          name="link"
          value={artefato.link}
          onChange={handleInputChange}
          className="w-full bg-gray-700 text-white"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tipo" className="text-gray-300">Tipo de Artefato</label>
        <Dropdown
          id="tipo"
          value={artefato.tipo}
          options={tiposArtefato}
          onChange={handleDropdownChange}
          placeholder="Selecione um tipo"
          className="w-full bg-gray-700 text-white"
          panelStyle={{ backgroundColor: '#1F2937', color: '#D1D5DB', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="palavrasChave" className="text-gray-300">Palavras-chave</label>
        <InputText
          id="palavrasChave"
          name="palavrasChave"
          value={artefato.palavrasChave}
          onChange={handleInputChange}
          className="w-full bg-gray-700 text-white"
        />
      </div>

      <div className="flex space-x-4">
        <Button label="Salvar" icon="pi pi-check" className="p-button-success" onClick={handleSaveArtefato} />
        <Button label="Cancelar" icon="pi pi-times" className="p-button-secondary" onClick={handleCancelar} />
      </div>
    </div>
  );
}
