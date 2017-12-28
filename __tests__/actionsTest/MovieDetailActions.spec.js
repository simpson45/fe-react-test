import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/MovieDetailActions'
import {GET_MOVIE_SUCCESS} from '../../src/constants/MovieDetail'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const payload = {
    movieId: 1,
    movieName: 'Taxi',
    moviePoster: 'url',
    movieYear: '2017',
    movieLevel: 5.5
}

describe('movie detail actions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates GET_MOVIE_SUCCESS when fetching todos has been done', () => {
       fetchMock.get('*', {payload: payload})

        const expectedActions = [
           {
               type: GET_MOVIE_SUCCESS,
               payload: {payload}
           }
        ]
        const store = mockStore({ payload: {} })

        return store.dispatch(actions.getMovieInfo()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

