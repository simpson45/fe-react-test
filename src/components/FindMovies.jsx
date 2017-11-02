import React, { Component } from 'react'
import './styles/FindMovies.css'
import PropTypes from 'prop-types'
import Movie from './Movie'
import NotFoundMovies from './NotFound'


export default class MoviesSearch extends Component {

    constructor(props){
        super(props);
        this.state = {value:''};
        this.getMovie = this.getMovie.bind(this);
    }

    getMovie(movieId) {
        this.props.history.push(`/film/${movieId}`);
        window.scrollTo(0,0);
    }

    changeColorByClick(sort){
        switch (sort) {
            case 'date':
                document.getElementById('sortByDateText').style.color = '#f55263';
                document.getElementById('sortByRatingText').style.color = '#414141';
                break;
            case 'rating':
                document.getElementById('sortByDateText').style.color = '#414141';
                document.getElementById('sortByRatingText').style.color = '#f55263';
                break;
            default:
                document.getElementById('sortByDateText').style.color = '#414141';
                document.getElementById('sortByRatingText').style.color = '#414141';
        }
    }

    renderList(){
        const {foundedMovies, foundedMovie} = this.props;
        if (foundedMovies.length !==0){
            return foundedMovies
                .filter(item=>!foundedMovie||foundedMovie.movieId!==item.movieId)
                .map((item) =>
                    <Movie item={item} getMovie={this.getMovie} key={item.movieId}/>
                );
        }
        return <NotFoundMovies/>
    }

    render() {
        const {foundedMovies} = this.props;
        const {sortMovies} = this.props;
        return <main>
            <nav>
                <p className="moviesFoundText"> {foundedMovies.length} movies found </p>
                <p className="sortByText"> Sort by </p>
                <p id="sortByDateText" onClick={()=>{sortMovies('date'); this.changeColorByClick('date')}}> realease date</p>
                <p id="sortByRatingText" onClick={()=>{sortMovies('rating'); this.changeColorByClick('rating')}}> rating </p>
            </nav>
            <div className="main">
                {this.renderList()}
            </div>
        </main>
    }
}

MoviesSearch.propTypes = {
  foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};


