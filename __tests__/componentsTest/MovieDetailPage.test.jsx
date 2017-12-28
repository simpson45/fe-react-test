import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailPage from '../../src/components/MoviePages/MovieDetailPage';


let props;

describe('<MovieDetailPage/>', () => {
  beforeEach(() => {
    props = {
      getMovieInfo: jest.fn(),
      match: {
        params: {
          string: 'Test 13',
        },
      },
      movies: {
        foundedMovies: [
          {},
        ],
      },
      movie: {
        foundedMovie: {},
      },
      sortMovies: jest.fn(),
      history: {},
    };
  });

  it('should render MovieDetailPage', () => {
    const component = shallow(<MovieDetailPage {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('will call getMovieInfo in componentDidMount', () => {
    const component = shallow(<MovieDetailPage {...props} />);
    expect(props.getMovieInfo).toBeCalledWith('Test 13');
  });

  it('will call getMovieInfo in componentWillReceiveProps', () => {
    const component = shallow(<MovieDetailPage {...props} />);
    component.setProps({ ...props, match: { params: { string: 'Test 11' } } });
    expect(props.getMovieInfo).toBeCalledWith('Test 11');
  });
});
