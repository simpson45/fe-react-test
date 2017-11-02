import { GET_MOVIES_SUCCESS, GET_MOVIES_ERR, SORT_MOVIES } from '../constants/SearchMovies'

const initialState = {
    foundedMovies: []
};

function newJson(movies) {
    return movies.map(movie =>({
        movieId:movie.id,
        movieName:movie.title,
        movieYear:movie.release_date,
        movieRating:movie.vote_average,
        moviePoster:movie.poster_path
    }))
}

function sortMovies(movies, typeOfSort) {
    const newMovies=[...movies];
    const propsBySortType ={
        date:'movieYear',
        rating:'movieRating',
    };
    const sortProp=propsBySortType[typeOfSort];

    newMovies.sort((a, b)=> b[sortProp] > a[sortProp] ? 1: -1);
    return newMovies;
}

export default function searchMovies(state = initialState, action) {

    switch (action.type) {
        case GET_MOVIES_SUCCESS:
            return {...state, foundedMovies:newJson(action.payload)};
        case GET_MOVIES_ERR:
            /*return {...state, foundedMovies:newJson(action.payload)};*/
        case SORT_MOVIES:
            return {...state, foundedMovies:sortMovies(state.foundedMovies, action.payload)};
        default:
            return state;
    }
}

