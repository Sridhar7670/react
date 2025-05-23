// import Context from './Context';
import  { useState,useEffect } from 'react';
import './ProfileDetail.css'; 

import Cookies from 'js-cookie';



const ProfileDetail = () => {
  // const {movieData :movie}=useContext(Context) //use data from context if needed 
  const [movie, setMovie] = useState(null);
  const [seeMore,SetseeMore]=useState(false)

  useEffect(() => {
    const movieData = Cookies.get('selectedMovie');
    if (movieData) {
      try {
        setMovie(JSON.parse(movieData));
      } catch (error) {
        console.error("Invalid cookie data", error.message);
      }
    }
  }, []);

  const handleAddtoFav=async()=>{
    try {
      
    } catch (err) {
      
    }
  }
  if (!movie) {
    return <div>Loading movie data...</div>; // Or a spinner, etc.
  }
return (

  <div className="movie-detail">
    <div className="movie-poster">
      <img src={movie.img} alt={movie.movieName} className="movie-image" width="100%" />
      <div className="icon-group">
        <span className="heart-icon" onClick={handleAddtoFav}>❤️</span>
      </div>
    </div>

    <div className="movie-content">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2 className="movie-title">{movie.movieName} ({movie.releaseYear})</h2>
          <p className="movie-meta">🎬 Directed by: {movie.director}</p>
          <p className="movie-meta">🌐 Language: {movie.language}</p>
        </div>
        <span className="movie-rating">IMDb {movie.ratingIMDB}</span>
      </div>

      <div className="movie-section">
        <h3>Description</h3>
        <p>
          {seeMore ? movie.description : movie.description.split(" ").slice(0, 7).join(" ") + "..."}
          <span className="see-more" onClick={() => SetseeMore(p => !p)}>
            {seeMore ? "See Less" : "See More"}
          </span>
        </p>
      </div>

      <div className="movie-section">
        <h3>Cast</h3>
        <div className="tags">
          {movie.cast.map((actor, index) => (
            <span key={index} className="tag">{actor}</span>
          ))}
        </div>
      </div>

      <div className="movie-section">
        <h3>Genres</h3>
        <div className="tags">
          {movie.genere.split(',').map((genre, index) => (
            <span key={index} className="tag">{genre.trim()}</span>
          ))}
        </div>
      </div>
    </div>

    <button className="watch-button">Watch Trailer</button>
  </div>
);

};

export default ProfileDetail;
