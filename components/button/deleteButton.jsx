import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const DeleteButton = ({ titulo }) => {
  const [artefatos, setArtefatos] = useState([]);

  useEffect(() => {
    const storedArtefatos = JSON.parse(localStorage.getItem("artefatos")) || [];
    setArtefatos(storedArtefatos);
  }, []);

  const excluirArtefato = (titulo) => {
    const novosArtefatos = artefatos.filter(
      (artefato) => artefato.titulo !== titulo
    );
    localStorage.setItem("artefatos", JSON.stringify(novosArtefatos));
    setArtefatos(novosArtefatos);
  };

  return (
    <Button
      onClick={() => {
        excluirArtefato(titulo);
      }}
    >
      Delete {titulo}
    </Button>
  );
};

export { DeleteButton };
