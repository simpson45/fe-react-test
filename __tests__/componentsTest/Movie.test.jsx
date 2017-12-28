import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../../src/components/Movie/Movie';

describe('<Movie/>', () => {
  const movie = {
    movieId: 1,
    movieName: 'Taxi',
    moviePoster: 'url',
    movieYear: '2017',
    movieLevel: 5.5,
  };

  it('should render Movie', () => {
    const component = shallow(<Movie item={movie} />);
    expect(component).toMatchSnapshot();
  });
});
