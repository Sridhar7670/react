import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import Context from './Context';
const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setActive}=useContext(Context)

  useEffect(() => {
    fetchFavourites();
  }, []);

  const fetchFavourites = async () => {
    try {
      const token = Cookies.get('token');
      
      if (!token) {
        setLoading(false);
        return;
      }

      const parsedToken = JSON.parse(token);
      
      const response = await axios.get('https://backend-d70u.onrender.com/favourites', {
        headers: {
          'Authorization': `Bearer ${parsedToken}`
        }
      });
      setFavourites(response.data.favourites || []);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching favourites:', err);
      setError('Failed to load favourites');
      setLoading(false);
    }
  };

  const removeFavourite = async (movieId) => {
    try {
      const token = Cookies.get('token');
      const parsedToken = JSON.parse(token);

      await axios.delete(`https://backend-d70u.onrender.com/favourites/${movieId}`, {
        headers: {
          'Authorization': `Bearer ${parsedToken}`
        }
      });

      // Update local state
      setFavourites(favourites.filter(movie => movie.movieName !== movieId));
    } catch (err) {
      console.error('Error removing favourite:', err);
      setError('Failed to remove from favourites');
    }
  };

  if (loading) {
    return (
      <div className="favourites-container">
        <h2 style={{textAlign:"center"}}>Your Favourites</h2>
        <div className="loading">Loading your favourite movies...</div>
      </div>
    );
  }

  if (!Cookies.get('token')) {
    return (
      <div className="favourites-container">
        <h2 style={{textAlign:"center"}}>Your Favourites</h2>
        <div className="login-prompt">
          <p>Please log in to view your favourite movies.</p>
          <button onClick={() => {navigate('/login');setActive('person')}} className="login-btn">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="favourites-container">
        <h2 style={{textAlign:"center"}}>Your Favourites</h2>
        <div className="error">{error}</div>
        <button onClick={fetchFavourites} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="favourites-container">
      <h2 style={{textAlign:"center"}}>Your Favourites</h2>
      {favourites.length === 0 ? (
        <div className="no-favourites">
          <p>You haven't added any movies to your favourites yet.</p>
        </div>
      ) : (
        <div className="favourites-grid">
          {favourites.map(movie => (
            <div key={movie.movieName} className="movie-card" >
              <img src={movie.img} alt={movie.movieName} className="movie-poster" onClick={()=>navigate(`/search/${encodeURIComponent(movie.movieName)}`)}/>
              <div className="movie-info">  
               <h3 style={{ textAlign: "center" }}>{movie.movieName?.trim().split(" ")[0]}
                {movie.movieName?.trim().split(" ").length > 1 ? "..." : ""}</h3>

                <button 
                  onClick={() => removeFavourite(movie.movieName)}
                  className="remove-btn"
                >
                 <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;



