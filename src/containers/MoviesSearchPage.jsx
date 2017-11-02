import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from "../components/Header";
import PropTypes from 'prop-types';
import FindMovies from "../components/FindMovies"
import * as searchActions from '../actions/SearchActions'


class MoviesSearchPage extends Component {

    getMoviesByUrl(url){
        if (url === undefined){
            this.props.searchAction.getPopularMovies();
        }
        else {this.props.searchAction.getMoviesByName(url);}
    }

    componentDidMount(){
        this.getMoviesByUrl(this.props.match.params.string);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.string!==nextProps.match.params.string){
            this.getMoviesByUrl(nextProps.match.params.string);
        }
    }

    render() {
        const { history} = this.props;
        const { foundedMovies} = this.props.movies;
        const { foundedMovie } = this.props.movie;
        const {sortMovies} = this.props.searchAction;

        return <div>
            <Header history={history}/>
            <FindMovies foundedMovies={ foundedMovies }
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
            searchAction: bindActionCreators(searchActions, dispatch),
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage)

MoviesSearchPage.propTypes = {
    foudedMovies: PropTypes.array, foundedMovie: PropTypes.object, sortMovies: PropTypes.func
};