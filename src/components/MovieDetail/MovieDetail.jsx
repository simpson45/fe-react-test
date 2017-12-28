import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './movieDetail.css';

export default class MovieDetail extends Component {
  backToSearch = () => {
    this.props.history.push('/');
  };

  render() {
    const { movie } = this.props;

    if (!movie) {
      return null;
    }

    return (
      <main className={style.movieDetail}>
        <header className={style.headerMovieDetail}>
          <p className={style.logo}>netflixroulette</p>
          <button className={style.backButton} onClick={this.backToSearch}>SEARCH</button>
        </header>
        <div className={style.movieInfo}>
          <figure className={style.movieFigure}>
            <img src={`https://image.tmdb.org/t/p/w640${movie.moviePoster}`} />
          </figure>
          <div className={style.info}>
            <h1 className={style.name}>{movie.movieName}</h1>
            <h2 className={style.mark}>{movie.movieLevel}</h2>
            <h2 className={style.year}>{movie.movieYear}</h2>
            <h2 className={style.durability}>{movie.movieDurability} min.</h2>
            <h2 className={style.story}>{movie.movieStory}</h2>
          </div>
        </div>
      </main>
    );
  }
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    moviePoster: PropTypes.string,
    movieName: PropTypes.string,
    movieLevel: PropTypes.number,
    movieYear: PropTypes.string,
    movieDurability: PropTypes.number,
    movieStory: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MovieDetail.defaultProps = {
  movie: {
    moviePoster: '',
    movieName: '',
    movieLevel: 0,
    movieYear: '',
    movieDurability: 0,
    movieStory: '',
  },
};
