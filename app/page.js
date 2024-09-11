"use client";

import CRUD from "./components/crud/CRUD";
import SearchCard from "./components/searchCard/searchCard.jsx";
import React from "react";
import Search from "./components/search/search";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-10 w-10/12 mx-auto">
      <Search />
      <SearchCard />
      <CRUD />
    </div>
  );
}
