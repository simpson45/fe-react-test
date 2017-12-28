import reducer from '../../src/reducer/searchMovies';
import { GET_MOVIES_SUCCESS, SORT_MOVIES } from '../../src/constants/SearchMovies';
import * as fakeResponce from './getFakeMovies';


describe('GET_MOVIES_SUCCESS reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ foundedMovies: [] });
  });

  it('should handle GET_MOVIES_SUCCESS', () => {
    expect(reducer(undefined, {
      type: GET_MOVIES_SUCCESS,
      payload: fakeResponce.foundedMoviesJson,
    })).toEqual({ foundedMovies: fakeResponce.foundedMovies });
  });

  it('should handle SORT_MOVIES', () => {
    expect(reducer(
      { foundedMovies: fakeResponce.foundedMovies },
      {
        type: SORT_MOVIES,
        payload: 'date',
      },
    )).toEqual({ foundedMovies: fakeResponce.foundedMoviesSort });
  });
});
