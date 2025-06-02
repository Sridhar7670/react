// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// const MovieCard = ({ item }) => {
//   const [isFavourite, setIsFavourite] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // Check if movie is already in favorites when component mounts
//   useEffect(() => {
//     checkFavoriteStatus();
//   }, []);

//   const checkFavoriteStatus = async () => {
//     try {
//       const token = Cookies.get('token');
//       if (!token) return;

      
//       const response = await axios.get('https://react-8ypw.vercel.app/favourites', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       // Check if current movie is in favorites
//       const isInFavorites = response.data.favourites?.some(
//         fav => fav.movieName === item.movieName && fav.releaseYear === item.releaseYear
//       );
//       setIsFavourite(isInFavorites);
//     } catch (err) {
//       console.error('Error checking favorite status:', err);
//     }
//   };

//   const handleCardClick = () => {
//     Cookies.set('selectedMovie', JSON.stringify(item), { expires: 1 });
//     navigate(`/search/${item.movieName}`);
//   };

//   const toggleFavourite = async (e) => {
//     e.stopPropagation(); // Prevent card click when clicking heart
    
//     try {
//       const token = Cookies.get('token');
      
//       if (!token) {
//         alert('Please log in to add favourites');
//         return;
//       }

//       setLoading(true);
      

//       if (isFavourite) {
//         // Remove from favourites
//         await axios.delete(`https://react-8ypw.vercel.app/favourites/${item.movieName}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//       } else {
//         // Add to favourites
//         await axios.post('https://react-8ypw.vercel.app/favourites', {
//           movieName: item.movieName,
//           releaseYear: item.releaseYear,
//           img: item.img,
//           // Add any other movie data you want to store
//           ...item // This will include all item properties
//         }, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//       }

//       setIsFavourite(!isFavourite);
//       setLoading(false);
//     } catch (err) {
//       console.error('Error toggling favourite:', err);
//       setLoading(false);
//       alert('Failed to update favourites');
//     }
//   };

//   return (
//     <div className="movie-card" onClick={handleCardClick}>
//       <img src={item.img} alt={item.movieName} className="movie-img" />
//       <div className="movie-footer">
//         <span className="movie-title-year">{item.movieName} ({item.releaseYear})</span>
//         <span 
//           className={`material-symbols-outlined heart-icon ${isFavourite ? 'favourited' : ''}`}
//           onClick={toggleFavourite}
//         >
//           {loading ? 'hourglass_empty' : (isFavourite ? 'favorite' : 'favorite_border')}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default React.memo(MovieCard);

// details.js
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
      if (!token) return;

      const response = await axios.get('https://moviesbackend-tau.vercel.app/favourites', {
        headers: { 'Authorization': `Bearer ${token}` }
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
    if (!token) {
      alert('Please log in to add favourites');
      return;
    }

    setLoading(true);
    try {
      if (isFavourite) {
        await axios.delete(`https://moviesbackend-tau.vercel.app/favourites/${item.movieName}`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } else {
        await axios.post('https://moviesbackend-tau.vercel.app/favourites', item, {
          headers: { 'Authorization': `Bearer ${token}` }
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
