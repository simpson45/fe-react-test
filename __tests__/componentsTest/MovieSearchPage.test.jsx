import React from 'react';
import { shallow } from 'enzyme';
import MovieSearchPage from '../../src/components/MoviePages/MovieSearchPage';


let props;

describe('<MovieSearchPage/>', () => {
  beforeEach(() => {
    props = {
      getMovieInfo: jest.fn(),
      match: {
        params: {
          string: 'Test 13',
        },
      },
      movies: {
        foundedMovies: [],
      },
      movie: {
        foundedMovie: {},
      },
      searchAction: {
        getPopMovies: jest.fn(),
        getMoviesByName: jest.fn(),
        sortMovies: jest.fn(),
      },
      history: {},
    };
  });

  it('will render MovieSearchPage', () => {
    const component = shallow(<MovieSearchPage {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('will call getMoviesByUrl in componentDidMount with defined param', () => {
    const component = shallow(<MovieSearchPage {...props} />);
    expect(props.searchAction.getMoviesByName).toBeCalledWith('Test 13');
  });

  it('will call getMoviesByUrl in componentDidMount, componentWillReceiveProps' +
    ' with undefined param', () => {
    const component = shallow(<MovieSearchPage {...props} />);
    component.setProps({ ...props, match: { params: { string: undefined } } });
    expect(props.searchAction.getPopMovies).toBeCalled();
  });

  it('will call getMoviesByUrl in componentWillReceiveProps with defined param', () => {
    const component = shallow(<MovieSearchPage {...props} />);
    component.setProps({ ...props, match: { params: { string: 'Test 11' } } });
    expect(props.searchAction.getMoviesByName).toBeCalledWith('Test 11');
  });
});
