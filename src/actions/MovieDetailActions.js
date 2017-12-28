import { GET_MOVIE_SUCCESS, GET_MOVIE_ERR } from '../constants/MovieDetail';
import { status } from './checkStatus';


function getMovieSuccess(movie) {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: movie,
  };
}

function getMovieErr() {
  return {
    type: GET_MOVIE_ERR,
  };
}

export default function getMovieInfo(movieId) {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dcea89f9fc948e466f1b59b92684313c`)
      .then(status)
      .then(json => json.json())
      .then(json => dispatch(getMovieSuccess(json)))
      .catch(ex => dispatch(getMovieErr(ex)));
  };
}
