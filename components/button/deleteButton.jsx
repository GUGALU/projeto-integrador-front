import React from "react";
import { Button } from "../ui/button";

const DeleteButtom = () => {



    const excluirArtefato = (titulo) => {
        useEffect(() => {
            const storedArtefatos = JSON.parse(localStorage.getItem('artefatos')) || [];
            setArtefatos(storedArtefatos);
        }, []);
        const novosArtefatos = artefatos.filter(artefato => artefato.titulo !== titulo);
        localStorage.setItem('artefatos', JSON.stringify(novosArtefatos));
        setArtefatos(novosArtefatos);
    };
    return (
        <Button
            onClick={() => {
                excluirArtefato(artefato.titulo);
            }}
        >
        </Button>
    );
};

export { DeleteButtom };
