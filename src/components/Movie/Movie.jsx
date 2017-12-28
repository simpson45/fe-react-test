import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Movie.css';


const ulrForPoster = 'https://image.tmdb.org/t/p/w640';
const Movie = ({ item }) => (
  <Link className={style.movieBaner} to={`/film/${item.movieId}`}>
    <div title={item.movieName}>
      <figure className={style.poster}>
        <img src={`${ulrForPoster}${item.moviePoster}`} alt={item.movieName} />
      </figure>
      <figcaption>
        <p className={style.name}>{item.movieName}</p>
        <p className={style.year}>{item.movieYear}</p>
        <p className={style.level}>{item.movieLevel}</p>
      </figcaption>
    </div>
  </Link>
);

export default Movie;


Movie.propTypes = {
  item: PropTypes.shape({
    movieId: PropTypes.number,
    movieName: PropTypes.string,
    moviePoster: PropTypes.string,
    movieYear: PropTypes.string,
    movieLevel: PropTypes.number,
  }).isRequired,
};

