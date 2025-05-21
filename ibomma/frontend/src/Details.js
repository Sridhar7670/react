import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from './Context';

const MovieCard = ({ item }) => {
  const { setmovieData } = useContext(Context);
  const navigate = useNavigate();

  const handleClick = () => {
    setmovieData(item);
    navigate(`/search/${item.movieName}`); // assuming movieName is URL-safe
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={item.img} alt={item.movieName} className="movie-img" />
      <div className="movie-footer">
        <span className="movie-title-year">{item.movieName} ({item.releaseYear})</span>
        <span className="material-symbols-outlined heart-icon">favorite</span>
      </div>
    </div>
  );
};

export default MovieCard;
