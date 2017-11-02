import {GET_MOVIE_SUCCESS, GET_MOVIE_ERR} from '../constants/MovieInfo'

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

function getMovieError() {
    return {
        type: GET_MOVIE_ERR
    }
}

function getMovieSuccess(movie){
    return {
        type: GET_MOVIE_SUCCESS,
        payload: movie
    }
}

export function getMovieInfo(movieId) {
    return dispatch => {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dcea89f9fc948e466f1b59b92684313c`)
            .then(status)
            .then(json)
            .then( json => dispatch(getMovieSuccess(json)))
            .catch(ex => dispatch(getMovieError()))
    }
}


