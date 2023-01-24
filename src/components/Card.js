import React from 'react'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <div>
      <div className="card card-class">
        <img src="movie-poster.jpg" className="card-img-top" alt="Movie Poster" />
        <div className="card-body">
            <h5 className="card-title">Movie Title</h5>
            <p className="card-text">Movie Description</p>
            <a href="Some link" className="btn btn-primary">Learn More</a>
        </div>
        </div>

     </div>
  )
}

export default Card
