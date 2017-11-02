import {GET_MOVIES_SUCCESS, GET_MOVIES_ERR, SORT_MOVIES} from '../constants/SearchMovies'


const urlGetPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=dcea89f9fc948e466f1b59b92684313c&language=en-US&page=1`;
const urlGetMoviesByName =(name)=> `https://api.themoviedb.org/3/search/movie?api_key=dcea89f9fc948e466f1b59b92684313c&language=en-US&query=${name}&page=1`;

function json(response) {
    return response.json()
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function getMoviesError() {
    return{
        type: GET_MOVIES_ERR
    }
}

function getMoviesSuccess(movies){
    return{
        type: GET_MOVIES_SUCCESS,
        payload: movies.results
    }
}

export function getMoviesByName(name) {
    return dispatch => {
        getMovies(dispatch, urlGetMoviesByName(name))
    }
}

export function getPopularMovies() {
    return dispatch => {
        getMovies(dispatch, urlGetPopularMovies)
    }
}

function getMovies(dispath, url) {
    fetch(url)
        .then(status)
        .then(json)
        .then(json => dispath(getMoviesSuccess(json)))
        .catch( ex => dispath(getMoviesError()))
}

export function sortMovies(typeOfSort) {
    return {
        type: SORT_MOVIES,
        payload: typeOfSort
    }
}




















