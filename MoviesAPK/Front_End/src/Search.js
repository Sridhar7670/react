import { useContext, useState } from "react";
import "./App.css";
import Context from "./Context";


const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const {temp,setTemp}=useContext(Context)
  const changeText = (e) => {
    if(e.target.value===""){
    console.log(e.target.value)
    setTemp(temp=>!temp)
    }
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
  <button type="button" className="search-button" onClick={() => onSearch(value)}>
    Search
  </button>
</form>

  );
};

export default Search;
