"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { IoSearch } from "react-icons/io5";
import { Dialog } from "primereact/dialog";
import Crud from "../crud/CRUD";

const Search = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

  return (
    <div className="flex justify-center items-center gap-2 w-full mt-10">
      <Button
        icon="pi pi-plus"
        className="bg-blue-500 text-white px-3 py-2 rounded-full"
        onClick={openDialog}
      />

      {/* Campo de pesquisa */}
      <form action="/search" method="GET" className="flex w-10/12 gap-2">
        <input
          type="search"
          name="query"
          className="border border-black bg-white p-2 w-full"
          placeholder="Digite sua pesquisa..."
        />
        <Button
          type="submit"
          className="bg-lime-700 text-white px-4 py-2 w-2/12 flex justify-center items-center gap-2"
        >
          <IoSearch className="h-6 w-6" />
          Pesquisar
        </Button>
      </form>

      <Dialog
        visible={isDialogVisible}
        onHide={closeDialog}
        style={{ width: "50vw" }}
        modal
      >
        <Crud />
      </Dialog>
    </div>
  );
};

export default Search;
