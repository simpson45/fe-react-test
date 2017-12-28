import reducer from '../../src/reducer/movieDetail';
import { GET_MOVIE_SUCCESS } from '../../src/constants/MovieDetail';
import * as fakeResponce from './getFakeMovie';


describe('GET_MOVIE_SUCCESS reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ foundedMovie: null });
  });

  it('should handle GET_MOVIE_SUCCESS', () => {
    expect(reducer(undefined, {
      type: GET_MOVIE_SUCCESS,
      payload: fakeResponce.foundedMovieJson,
    })).toEqual({
      foundedMovie: fakeResponce.foundedMovie,
    });
  });
});
