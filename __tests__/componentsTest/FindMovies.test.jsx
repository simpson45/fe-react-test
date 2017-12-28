import React from 'react';
import { shallow } from 'enzyme';
import FildMovies from '../../src/components/FindMovies/FindMovies';


let props;

describe('<FindMovies/>', () => {
  beforeEach(() => {
    props = {
      foundedMovie: {
        movieId: 1,
      },
      foundedMovies: [
        {
          movieId: 1,
          movieName: 'Taxi',
          moviePoster: 'url',
          movieYear: '2017',
          movieLevel: 5.5,
        },
      ],
    };
  });

  it('should render FindMovies with foundedMovies', () => {
    const component = shallow(<FindMovies {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should render FindMovies without foundedMovies', () => {
    const component = shallow(<FindMovies {...props} foundedMovies={[]} />);
    expect(component).toMatchSnapshot();
  });
});
