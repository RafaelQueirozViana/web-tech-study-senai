import React from 'react';
import './MovieCard.css';

function MovieCard({ title, rating, children }) {
    return (
        <div className="movie-card">
            <div className="movie-header">
                <h3>{title}</h3>
                <span className="movie-rating"> {rating}/10</span>
            </div>

            <div className="movie-description">
                {children}
            </div>

            <button className="movie-btn" onClick={() => alert(`Você curtiu ${title}!`)}>
                Assistir Trailer
            </button>
        </div>
    );
}

export default MovieCard;
