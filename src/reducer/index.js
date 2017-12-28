import { combineReducers } from 'redux';
import searchMovies from './searchMovies';
import movieDetail from './movieDetail';

export default combineReducers({
  searchMovies,
  movieDetail,
});
