import React from 'react';
import { shallow } from 'enzyme';
import SortBoard from '../../src/components/SortBoard/SortBoard';


let props;

describe('<SortBoard/>', () => {
  beforeEach(() => {
    props = {
      numberOfMovies: 20,
      sortMovies: jest.fn(),
    };
  });

  it('should render SortBoard', () => {
    const component = shallow(<SortBoard {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call sortByDate', () => {
    const component = shallow(<SortBoard {...props} />);
    component.find('.button-sort-by-date').simulate('click');
    expect(component).toMatchSnapshot();
  });

  it('should call sortByDate', () => {
    const component = shallow(<SortBoard {...props} />);
    component.find('.button-sort-by-rating').simulate('click');
    expect(component).toMatchSnapshot();
  });
});
