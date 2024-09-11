import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'tailwindcss/tailwind.css';

const CRUD = () => {
  const [artefato, setArtefato] = useState({
    titulo: '',
    autor: '',
    integrantes: '',
    link: '',
    tipo: null,
    palavrasChave: ''
  });

  const tiposArtefato = [
    { label: 'Artigo', value: 'artigo' },
    { label: 'Projeto', value: 'projeto' },
    { label: 'Repositório', value: 'repositorio' },
    { label: 'Diagrama', value: 'diagrama' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtefato((prev) => ({ ...prev, [name]: value }));
  };

  const handleDropdownChange = (e) => {
    setArtefato((prev) => ({ ...prev, tipo: e.value }));
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-[#ffffff]"
    >
      <div className="max-w-xl w-full p-5 border rounded-md shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-5 text-center">Cadastro de Artefatos</h2>

        <div className="mb-4">
          <label htmlFor="titulo" className="block font-medium">Título</label>
          <InputText
            id="titulo"
            name="titulo"
            value={artefato.titulo}
            onChange={handleInputChange}
            className="w-full mt-1 border border-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="autor" className="block font-medium">Autor</label>
          <InputText
            id="autor"
            name="autor"
            value={artefato.autor}
            onChange={handleInputChange}
            className="w-full mt-1 border border-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="integrantes" className="block font-medium">Integrantes</label>
          <InputText
            id="integrantes"
            name="integrantes"
            value={artefato.integrantes}
            onChange={handleInputChange}
            className="w-full mt-1 border border-black"
            placeholder=" Adicionar autor como padrão"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="link" className="block font-medium">Link do Artefato</label>
          <InputText
            id="link"
            name="link"
            value={artefato.link}
            onChange={handleInputChange}
            className="w-full mt-1 border border-black"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tipo" className="block font-medium">Tipo de Artefato</label>
          <Dropdown
            id="tipo"
            value={artefato.tipo}
            options={tiposArtefato}
            onChange={handleDropdownChange}
            placeholder="Selecione um tipo"
            className="w-full border border-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="palavrasChave" className="block font-medium">Palavras-chave</label>
          <InputText
            id="palavrasChave"
            name="palavrasChave"
            value={artefato.palavrasChave}
            onChange={handleInputChange}
            className="w-full mt-1 border border-black"
          />
        </div>

        <div className="flex space-x-3 mt-6">
          <Button label="Adicionar" icon="pi pi-plus" className="p-button-success w-full" />
          <Button label="Editar" icon="pi pi-pencil" className="p-button-warning w-full" />
          <Button label="Excluir" icon="pi pi-trash" className="p-button-danger w-full" />
          <Button label="Buscar" icon="pi pi-search" className="p-button-info w-full" />
        </div>
      </div>
    </div>
  );
};

export default CRUD;