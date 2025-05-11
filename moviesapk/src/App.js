import { useState } from "react"
import Search from "./Search.js";
import "./App.css"
import MovieCard from "./MovieCard";
import { movies as movieData } from "./Search.js";

function App() {
  const [filteredMovies, setFilteredMovies] = useState(movieData);

  const handleSearch = (title) => {
    const filtered = movieData.filter((movie) =>
      movie.movieName.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="movie-cards">
        {
          filteredMovies.map((movieInfo, ind) =>
            <MovieCard movieInfo={movieInfo} key={ind} />
          )
        }
      </div>
    </>
  );
}

export default App;
