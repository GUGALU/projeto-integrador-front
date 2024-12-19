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
    <div className="p-4 w-full bg-white text-white rounded-lg">
      <h2 className="text-xl font-semibold mb-5 text-green-400">
        Editar Artefato
      </h2>

      {mensagemSucesso && (
        <p className="text-green-500 mb-3">{mensagemSucesso}</p>
      )}

      <div className="mb-4">
        <label htmlFor="titulo" className="text-black">
          Título
        </label>
        <InputText
          id="titulo"
          name="titulo"
          value={artefato.titulo}
          onChange={handleInputChange}
          className="w-full border border-black text-white rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="autor" className="text-black">
          Autor
        </label>
        <InputText
          id="autor"
          name="autor"
          value={artefato.autor}
          onChange={handleInputChange}
          className="w-full border border-black text-white rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="integrantes" className="text-black">
          Integrantes
        </label>
        <InputText
          id="integrantes"
          name="integrantes"
          value={artefato.integrantes}
          onChange={handleInputChange}
          className="w-full border border-black text-white rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="link" className="text-black">
          Link
        </label>
        <InputText
          id="link"
          name="link"
          value={artefato.link}
          onChange={handleInputChange}
          className="w-full border border-black text-white rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tipo" className="text-black">
          Tipo de Artefato
        </label>
        <Dropdown
          id="tipo"
          value={artefato.tipo}
          options={tiposArtefato}
          onChange={handleDropdownChange}
          placeholder="Selecione um Tipo"
          className="w-full border border-black text-white rounded-md"
          panelStyle={{
            backgroundColor: "#1F2937",
            color: "#D1D5DB",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="palavrasChave" className="text-black">
          Palavras-chave
        </label>
        <InputText
          id="palavrasChave"
          name="palavrasChave"
          value={artefato.palavrasChave}
          onChange={handleInputChange}
          className="w-full border border-black text-white rounded-md"
        />
      </div>

      <div className="flex space-x-4">
        <Button
          label="Salvar"
          icon="pi pi-check"
          className="p-button-success bg-green-600 p-2 rounded-md"
          onClick={handleSaveArtefato}
        />
        <Button
          label="Cancelar"
          icon="pi pi-times"
          className="p-button-secondary p-2 rounded-md bg-red-600"
          onClick={handleCancelar}
        />
      </div>
    </div>
  );
}
