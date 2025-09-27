function Search({ searchText, setSearchText }) {
  return (
    <form className="search">
      <img
        className="search__image"
        src="./images/icon-search.svg"
        alt="Search icon"
        width={20}
        height={20}
      />
      <input
        className="search__input"
        placeholder="Search by name or ingredient…"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}

export default Search;
