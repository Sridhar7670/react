import { useState } from "react";
import "./App.css";


const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const changeText = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue.trim());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <input
        className="search-input"
        placeholder="Search by Movie title..."
        value={value}
        onChange={changeText}
      />
      <button
        type="button"
        className="search-button"
        onClick={() => onSearch(value.trim())}
      >
        Search
      </button>
    </form>
  );
};

export default Search;

