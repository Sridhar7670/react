// import { useContext } from 'react';
// // import Context from './Context';
import { useNavigate } from 'react-router-dom';
import React from "react"
import Cookies from 'js-cookie';




const MovieCard = ({ item }) => {
  // const { setmovieData } = useContext(Context);// set data into context 
  const navigate = useNavigate();

  const handleClick = () => {
    //setmovieData(item);  //if wanted to use context 
    Cookies.set('selectedMovie', JSON.stringify(item), { expires: 1 });
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

export default React.memo(MovieCard);
