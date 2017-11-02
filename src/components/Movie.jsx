import React from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';


const ulrForPoster = 'https://image.tmdb.org/t/p/w640';
const Movie = ({item, getMovie}) => {
    return(
        <div className="movie" onClick={() => {getMovie(item.movieId)}} title={item.movieName}>
            <figure>
                <img src={`${ulrForPoster}${item.moviePoster}`} alt={item.movieName}/>
            </figure>
            <figcaption>
                <p className="moviesName">{item.movieName}</p>
                <p className="moviesYear">{item.movieYear}</p>
                <p className="moviesLevel">{item.movieRating}</p>
            </figcaption>
        </div>
    )
};

Movie.propTypes = {
    item: PropTypes.object.isRequired,
    getMovie: PropTypes.func.isRequired
};

export default Movie;