import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Search from "./Search.js";
import "./App.css"
import MovieCard from "./MovieCard.js";
import Context from "./Context";
import notfound from "./images/file not found.jpeg"
function App() {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const[temp,setTemp]=useState(true)
  useEffect(()=>{
    axios.get(`http://localhost:5000/all`).then((res)=>{setFilteredMovies(res.data)})
  },[temp])

  const handleSearch=(title)=>{
    console.log(title)
  axios.get(`http://localhost:5000/search/${title}`)
  .then((res)=>{ console.log(res.data);  setFilteredMovies(res.data)})
  .catch((err)=>{
    console.log(err.message)
  })
}
  return (
    <Context.Provider value={{temp,setTemp}}>
    <>
      <Search onSearch={handleSearch} />
      <div className="movie-cards">
        {
          filteredMovies.map((movieInfo, ind) =>
            <MovieCard movieInfo={movieInfo} key={ind} />
          )
        }
        {filteredMovies.length==0 && <div> 
          <img src={notfound} alt="not found" id="notfound" />
        <div style={{fontSize:"50px"}}>Movie NOT FOUND</div>
          </div>}
      </div>
    </>
     </Context.Provider>
  );
}

export default App;