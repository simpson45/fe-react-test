import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/movieInfo.css';

export default class MovieInfo extends Component {

    constructor(props){
        super(props);
        this.backToSearch = this.backToSearch.bind(this);
    }

    backToSearch() {
        this.props.history.push(`/`);
    }

    render() {
        const {movie} = this.props;

        if(!movie){
            return null;
        }

        return <main className="moviePage">
            <header className="headerMoviePage">
                <p className="logo">netflixroulette</p>
                <button className="backButton" onClick={() => {this.backToSearch()}}>SEARCH</button>
            </header>
            <div className="foundMovie">
                <figure className="movieFigure">
                    <img src={`https://image.tmdb.org/t/p/w640${movie.moviePoster}`}/>
                </figure>

                <div className="movieDetailInformation">
                    <h1 className="movieName">{movie.movieName}</h1>
                    <h2 className="movieRating">{movie.movieRating}</h2>
                    <h2 className="movieYear">Release date: {movie.movieYear}</h2>
                    <h2 className="movieDuration">Duration: {movie.movieDuration} min.</h2>
                    <h2 className="movieDescription">Description: {movie.movieDescription}</h2>
                </div>
            </div>
        </main>
    }
}

MovieInfo.propTypes = {
    movie: PropTypes.object
};