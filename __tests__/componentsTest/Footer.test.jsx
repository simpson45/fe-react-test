import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/components/Footer/Footer';

describe('<Footer />', () => {
  it('should render Footer', () => {
    const renderedCompanent = shallow(<Footer />);
    expect(renderedCompanent).toMatchSnapshot();
  });
});
