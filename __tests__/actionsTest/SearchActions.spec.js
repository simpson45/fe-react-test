import {sortMovies} from '../../src/actions/SearchActions';
import {SORT_MOVIES} from '../../src/constants/SearchMovies'

describe('serch movie action', () => {
    it('should create an action to sort movies', () => {
        const payload = 'date'
        const expectedAction = {
            type: SORT_MOVIES,
            payload
        }
        expect(sortMovies(payload)).toEqual(expectedAction)
    })
})