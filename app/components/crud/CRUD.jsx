import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'tailwindcss/tailwind.css';
import ArtefatoService from '../localStorage/localStorage';

export default function Crud() {
  const [artefato, setArtefato] = useState({
    titulo: '',
    autor: '',
    integrantes: '',
    link: '',
    tipo: null,
    palavrasChave: ''
  });

  const [artefatos, setArtefatos] = useState([]);

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

  const handleAddArtefato = () => {
    const novoArtefato = { ...artefato, id: Date.now() };
    ArtefatoService.adicionarArtefato(novoArtefato);
    const novosArtefatos = ArtefatoService.getArtefatos();
    setArtefatos(novosArtefatos);

    setArtefato({
      titulo: '',
      autor: '',
      integrantes: '',
      link: '',
      tipo: null,
      palavrasChave: ''
    });
  };

  const tiposArtefato = [
    { label: 'Artigo', value: 'artigo' },
    { label: 'Projeto', value: 'projeto' },
    { label: 'Repositório', value: 'repositorio' },
    { label: 'Diagrama', value: 'diagrama' }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
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
            placeholder="Adicionar autor como padrão"
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

        <div className="flex justify-center mt-6">
          <Button
            label="Adicionar Projeto"
            icon="pi pi-plus"
            className="p-button-success w-full"
            onClick={handleAddArtefato}
          />
        </div>

        {/* <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Artefatos Cadastrados</h3>
          {artefatos.length === 0 ? (
            <p className="text-gray-500">Nenhum artefato cadastrado ainda.</p>
          ) : (
            <ul className="list-disc pl-5">
              {artefatos.map((a) => (
                <li key={a.id} className="mb-2">
                  <strong>ID:</strong> {a.id} <br />
                  <strong>Título:</strong> {a.titulo} <br />
                  <strong>Autor:</strong> {a.autor} <br />
                  <strong>Tipo:</strong> {a.tipo || 'N/A'}
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
    </div>
  );
}