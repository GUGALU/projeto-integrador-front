"use client";

import CRUD from "./components/crud/CRUD";
import SearchCard from "./components/searchCard/searchCard.jsx";
import React from "react";
import Search from "./components/search/search";

export default function Home() {
  return (
    <div className="App">
      <Search />
      <SearchCard />
      <CRUD />
    </div>
  );
}
