import React from 'react';
import { shallow } from 'enzyme';
import Ellipsis from './Ellipsis';

describe('<Ellipsis />', () => {
  test('renders correctly', () => {
    const component = shallow(<Ellipsis />);
    expect(component).toMatchSnapshot();
  });
});
