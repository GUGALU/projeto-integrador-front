"use client"
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export function SearchFilter() {
  const [selectedCity, setSelectedCity] = useState(null);
  const types = [
    { name: "Tipo", code: "T" },
    { name: "Linguagem", code: "L" },
    { name: "Autor", code: "A" },
  ];

  return (
    <div className="card flex justify-content-center">
      <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={types} optionLabel="name"
        showClear placeholder="Select a City" className="w-full md:w-14rem" />
    </div>
  )
}
export default SearchFilter;
