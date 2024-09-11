import SearchCard from './components/searchCard/searchCard.jsx';
import React from 'react';
import Image from "next/image";
import SearchFilter from "./components/searchFilter/SearchFilter";
import Search from "./components/search/search";

export default function Home() {
  return (
      <div className="App">
        <h1 className="bg-white"/>
        <SearchCard />
        <Search/>
      </div>
  );
}
