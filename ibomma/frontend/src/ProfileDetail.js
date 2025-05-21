import  { useContext, useState } from 'react';
import './ProfileDetail.css'; 
import Context from './Context';

const ProfileDetail = () => {
  const {movieData :movie}=useContext(Context)
  const [seeMore,SetseeMore]=useState(false)

  // Dummy data for now — replace this with API call
  // const profile = {
  //   name: 'Felora Edword',
  //   age: 23,
  //   address: '4517 Washington Ave.',
  //   relationshipStatus: 'Single',
  //   bio: "I'm very simple girl. Simplicity is my attitude. I think it's personality of a man",
  //   interests: ['Relaxing', 'Reading', 'Nature', 'Makeup', 'Honesty'],
  //   image: 'https://dummyimage.com/200x300/000/fff&text=Baahubali', // Replace with real image
  // };
  // useEffect(()=>{
  //   axios.get(`http://localhost:5000/search/${movieName}`).then((res)=>{console.log(res)})
  // })

return (
  <div className="movie-detail">
    <div className="movie-poster">
      <img src={movie.img} alt={movie.movieName} className="movie-image" width="100%" />
      <div className="icon-group">
        <span className="heart-icon">❤️</span>
        <span className="star-icon">⭐</span>
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
