
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const MovieCard = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    try {
      const token = Cookies.get('token');
      const parsedToken = JSON.parse(token);

      if (!token) return;

      const response = await axios.get('https://moviesbackend-tau.vercel.app/favourites', {
        headers: { 'Authorization': `Bearer ${parsedToken}` }
      });

      const isInFavorites = response.data.favourites?.some(
        fav => fav.movieName === item.movieName && fav.releaseYear === item.releaseYear
      );
      setIsFavourite(isInFavorites);
    } catch (err) {
      console.error('Error checking favorite status:', err);
    }
  };

  const handleCardClick = () => {
    navigate(`/search/${encodeURIComponent(item.movieName)}`); // Safe for special chars
  };

  const toggleFavourite = async (e) => {
    e.stopPropagation();
    const token = Cookies.get('token');
    const parsedToken = JSON.parse(token);
    if (!token) {
      alert('Please log in to add favourites');
      return;
    }

    setLoading(true);
    try {
      if (isFavourite) {
        await axios.delete(`https://moviesbackend-tau.vercel.app/favourites/${item.movieName}`, {
          headers: { 'Authorization': `Bearer ${parsedToken}` }
        });
      } else {
        await axios.post('https://moviesbackend-tau.vercel.app/favourites', item, {
          headers: { 'Authorization': `Bearer ${parsedToken}` }
        });
      }

      setIsFavourite(!isFavourite);
    } catch (err) {
      console.error('Error toggling favourite:', err);
      alert('Failed to update favourites');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <img src={item.img} alt={item.movieName} className="movie-img" />
      <div className="movie-footer">
        <span className="movie-title-year">{item.movieName} ({item.releaseYear})</span>
        <span
          className={`material-symbols-outlined heart-icon ${isFavourite ? 'favourited' : ''}`}
          onClick={toggleFavourite}
        >
          {loading ? 'hourglass_empty' : (isFavourite ? 'favorite' : 'favorite_border')}
        </span>
      </div>
    </div>
  );
};

export default React.memo(MovieCard);
