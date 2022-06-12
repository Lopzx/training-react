import { useState } from "react";

const SearchBarClick = ({title,  searchQuery, setSearchQuery }) => {
  const [temporarySearchQuery, setTemp] = useState("");

  return (
    <div className="search-bar">
      <h3 className="search-bar__detail">{title}</h3>
      <input
        value={temporarySearchQuery}
        onChange={ (e)=> setTemp(e.target.value) }
        className="search-bar__input"
      />
      <button onClick={() => setSearchQuery(temporarySearchQuery)} className="btn btn-primary mg-top-3">Cari User Git</button>
    </div>
  );
};

export default SearchBarClick;
