import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({movie , key}) => {
  const posterImage = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div key={key} className="col-md-3 my-2 p-2">
      <div className="card card-class">
        <img src={posterImage} className="card-img-top" alt="Movie Poster" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.overview}</p>
          <a href="Some link" className="btn btn-primary">
           show details
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card
