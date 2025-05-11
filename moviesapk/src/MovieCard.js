
import React, { memo } from "react"; 
import "./App.css"; 

const MovieCard = ({ movieInfo }) => {
    return (
        <div className="movie-card">
            <img src={movieInfo.img} alt="movie poster" className="movie-img" />
            <h2 className="movie-title">{movieInfo.movieName}</h2>
            <p><strong>Director:</strong> {movieInfo.director}</p>
            <p><strong>Rating:</strong> {movieInfo.ratingIMDB}</p>
            <div className="movie-cast-section">
                <strong>Cast:</strong>
                <div className="cast-badges">
                    {movieInfo.cast.map((actor, index) => (
                        <span key={index} className="cast-badge">{actor}</span>
                    ))}
                </div>
            </div>
            <p className="movie-description"><strong>Description:</strong> {movieInfo.description}</p>
        </div>
    );
}

export default memo(MovieCard)