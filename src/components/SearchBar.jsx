const SearchBar = ({ title, searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <h3 className="search-bar__detail">{title}</h3>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar__input"
      />
    </div>
  );
};

export default SearchBar;
