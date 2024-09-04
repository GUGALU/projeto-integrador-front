import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export function FiltroDePesquisa() {
  const [selecaoFiltro, setSelecaoFiltro] = useState(null);
  const tipos = [
    { name: "Tipo", code: "T" },
    { name: "Linguagem", code: "L" },
    { name: "Autor", code: "A" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selecaoFiltro}
        onChange={(e) => setSelecaoFiltro(e.value)}
        options={tipos}
        optionLabel="name"
        showClear
        placeholder="Select a City"
        className="w-full md:w-14rem"
      />
    </div>
  );
}
export default FiltroDePesquisa;
