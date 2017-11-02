import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MovieInfo from "../components/MovieInfo";
import { connect } from 'react-redux'
import * as searchActions from '../actions/SearchActions'
import { bindActionCreators } from 'redux'
import * as movieInfoAction from "../actions/MovieInfoActions";
import MoviesSearch from "../components/FindMovies"


class MovieInfoPage extends Component {

    componentDidMount(){
        this.props.getMovieInfo(this.props.match.params.string);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.props.getMovieInfo(nextProps.match.params.string);
        }
    }

    render() {
        const { foundedMovies } = this.props.movies;
        const { foundedMovie } = this.props.movie;
        const { history} = this.props;
        const {sortMovies} = this.props.sortMovies;

        return <div>
            <MovieInfo movie={foundedMovie} history={history}/>
            <MoviesSearch foundedMovies={ foundedMovies }
                          foundedMovie={foundedMovie}
                          sortMovies={sortMovies}
                          history={history}/>
        </div>
    }
}

function mapStateToProps (state) {
    return {
        movies: state.searchMovies,
        movie: state.movieInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sortMovies: bindActionCreators(searchActions.sortMovies, dispatch),
        getMovieInfo: bindActionCreators(movieInfoAction.getMovieInfo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfoPage)

MovieInfoPage.propTypes = {
    foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};