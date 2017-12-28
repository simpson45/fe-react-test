import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header/Header';


let props;

describe('<Header/>', () => {
  beforeEach(() => {
    props = {
      history: { push: jest.fn() },
    };
  });

  it('should render Header', () => {
    const component = shallow(<Header {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should call handleChange on input changes', () => {
    const component = shallow(<Header {...props} />);
    component.find('input').simulate('change', { target: { value: 'Test 13' } });
    expect(component.instance().state.value).toBe('Test 13');
  });

  it('shoul call handleSubmit on form', () => {
    const component = shallow(<Header {...props} />);
    component.find('input').simulate('change', { target: { value: 'Test 11' } });
    component.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(props.history.push).toBeCalledWith('/search/Test 11');
  });
});
