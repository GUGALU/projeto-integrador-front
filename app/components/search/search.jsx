import { Button } from "primereact/button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <form
      action="/search"
      method="GET"
      className="flex justify-center gap-2 w-full"
    >
      <input
        type="search"
        name="query"
        className="border border-black bg-white p-2 w-full"
      />
      <Button type="submit" className="bg-lime-700 text-white px-4 py-2 w-2/12 justify-center items-center gap-2">
        <div>
          <IoSearch className="h-6 w-6"/>
        </div>
        Pesquisar
      </Button>
    </form>
  );
};
export default Search;
