import {combineReducers} from 'redux';
import searchMovies from "./searchMovies";
import movieInfo from "./movieInfo"

export default combineReducers({
   searchMovies,
   movieInfo
})
