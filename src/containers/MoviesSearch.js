import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchActions from '../actions/SearchActions';
import MoviesSearchPage from '../components/MoviePages/MovieSearchPage';


function mapStateToProps(state) {
  return {
    movies: state.searchMovies,
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchAction: bindActionCreators(searchActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesSearchPage);

