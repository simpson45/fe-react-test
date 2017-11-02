import {GET_MOVIE_SUCCESS, GET_MOVIE_ERR} from '../constants/MovieInfo'

const initialState = {
    foundedMovie:null
};

const newJson = (movie) => {
    return {
        movieId:movie.id,
        movieName:movie.title,
        moviePoster:movie.poster_path,
        movieRating:movie.vote_average,
        movieYear:movie.release_date,
        movieDuration:movie.runtime,
        movieDescription:movie.overview
    }
};

export default function MovieInfo(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_SUCCESS:
            return {...state, foundedMovie:newJson(action.payload)};
        case GET_MOVIE_ERR:
            /*return {...state, foundedMovies:newJson(action.payload)};*/
        default:
            return state;
    }

}