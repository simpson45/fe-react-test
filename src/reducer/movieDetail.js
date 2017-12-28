import { GET_MOVIE_SUCCESS, GET_MOVIE_ERR } from '../constants/MovieDetail';

const initialState = {
  foundedMovie: null,
};

const newJson = movie => ({
  movieId: movie.id,
  movieName: movie.title,
  moviePoster: movie.poster_path,
  movieLevel: movie.vote_average,
  movieYear: movie.release_date,
  movieDurability: movie.runtime,
  movieStory: movie.overview,
});

export default function MovieDetail(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE_SUCCESS:
      return { ...state, foundedMovie: newJson(action.payload) };
    case GET_MOVIE_ERR:
      return state;
    default:
      return state;
  }
}
