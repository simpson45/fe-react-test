import React from 'react';
import { shallow } from 'enzyme';
import MovieDetail from '../../src/components/MovieDetail/MovieDetail';


let props;

describe('<MovieDetail/>', () => {
  beforeEach(() => {
    props = {
      movie: {
        movieId: 1,
        movieName: 'Taxi',
        moviePoster: 'url',
        movieYear: '2017',
        movieLevel: 5.5,
      },
      history: { push: jest.fn() },
    };
  });


  it('should render MovieDetail', () => {
    const component = shallow(<MovieDetail {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call backToSearch', () => {
    const component = shallow(<MovieDetail {...props} />);
    component.instance().backToSearch();
    expect(props.history.push).toBeCalledWith('/');
  });
});
