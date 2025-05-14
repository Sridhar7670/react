import { useContext, useEffect, useState } from "react"
import LoadingIcons from 'react-loading-icons'
import axios from "axios"
import Search from "./Search.js";
import "./App.css"
import MovieCard from "./MovieCard.js";
import Context from "./Context";
import notfound from "./images/file not found.jpeg"
function App() {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading,setloading]=useState(true)
  const[temp,setTemp]=useState(true)
  useEffect(()=>{
    
      axios.get(`http://localhost:4000/all`).then((res)=>{setFilteredMovies(res.data); setloading(false)})
  
  },[temp])

  const handleSearch=(title)=>{
    console.log(title)
  axios.get(`http://localhost:4000/search/${title}`)
  .then((res)=>{ console.log(res.data);  setFilteredMovies(res.data)})
  .catch((err)=>{
    console.log(err.message)
  })
}

  return (
    <Context.Provider value={{temp,setTemp}}>
    <>
      <Search onSearch={handleSearch} />
    {loading && (
  <div
    className="loading-screen">
    <h2 style={{ marginBottom: '20px' }}>Movies are being loaded...</h2>
    <LoadingIcons.SpinningCircles width="60px" height="60px" stroke="#007bff" />
  </div>
)}


      <div className="movie-cards">
        {
          filteredMovies.map((movieInfo, ind) =>
            <MovieCard movieInfo={movieInfo} key={ind} />
          )
        }
        { !loading && filteredMovies.length==0 && <div> 
          <img src={notfound} alt="not found" width="400px" />
        <div style={{textAlign:"center",marginTop:"1vh"}}>TITLE NOT FOUND</div>
          </div>}
      </div>
    </>
     </Context.Provider>
  );
}

export default App;