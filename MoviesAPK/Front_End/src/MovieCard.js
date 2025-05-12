
import React, { memo } from "react"; 
import "./App.css"; 

const MovieCard = ({ movieInfo }) => {
    return (
        <div className="movie-card">
                <img src={movieInfo.img} alt="movie poster" className="movie-img" />
                
                <h2 className="movie-title gradient-text">{movieInfo.movieName}</h2>
                
                <p><strong className="label">🎬 Director:</strong> {movieInfo.director}</p>
                
            <p>
                <strong className="label">⭐ Rating:</strong>
                <span className={`rating ${movieInfo.ratingIMDB >= 8.5 ? 'rating-high' : 'rating-mid'}`}>
                {movieInfo.ratingIMDB}
                </span>
            </p>
    
            <div className="movie-cast-section">
                <strong className="label">🎭 Cast:</strong>
                <div className="cast-badges">
                {movieInfo.cast.map((actor, index) => (
                <span key={index} className="cast-badge">{actor}</span>
            ))}
            </div>
            </div>
  
            <p className="movie-description"><strong className="label">📝 Description:</strong> {movieInfo.description}</p>
        </div>

    );
}

export default memo(MovieCard)