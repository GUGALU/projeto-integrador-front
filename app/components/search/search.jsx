"use client";

import { useState } from "react";
import { Button } from "primereact/button";
import { IoSearch } from "react-icons/io5";
import { Dialog } from "primereact/dialog";
import Crud from "../crud/CRUD";
import { FaPlus } from "react-icons/fa";

const Search = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="flex justify-center items-center gap-2 w-full mt-10">
      {user && (
        <Button className="bg-blue-500 text-white p-3 rounded-full">
          <FaPlus />
        </Button>
      )}

      <form action="/search" method="GET" className="flex w-10/12 gap-2">
        <input
          type="search"
          name="query"
          className="rounded-xl bg-white p-2 w-full"
          placeholder="Digite sua pesquisa..."
        />
        <Button
          type="submit"
          className="bg-lime-700 text-white px-4 py-2 w-2/12 flex justify-center items-center gap-2 rounded-xl"
        >
          <IoSearch className="h-6 w-6" />
          Pesquisar
        </Button>
      </form>
    </div>
  );
};

export default Search;
