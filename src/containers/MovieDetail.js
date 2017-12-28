import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/SearchActions';
import getMovieInfo from '../actions/MovieDetailActions';
import MovieDetailPage from '../components/MoviePages/MovieDetailPage';


function mapStateToProps(state) {
  return {
    movies: state.searchMovies,
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortMovies: bindActionCreators(searchActions.sortMovies, dispatch),
    getMovieInfo: bindActionCreators(getMovieInfo, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailPage);
