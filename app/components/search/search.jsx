const Search = () => {
    return(
        <form action="/search" method="GET" className="flex justify-center">
            <input type="search" name="query" className="border bg-white p-2 w-64" />
            <button type="submit" className="bg-lime-700 text-white px-4 py-2">Pesquisar</button>
        </form>
    );
};
export default Search;