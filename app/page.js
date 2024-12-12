"use client";

import React from "react";
import Search from "./components/search/search";
import SearchCard from "./components/searchCard/searchCard";

import Header from "./components/header/header";

export default function Home() {
  return (
    <div className="flex flex-col w-10/12 mx-auto gap-10">
      <Search />
      <SearchCard />
    </div>
  );
}
