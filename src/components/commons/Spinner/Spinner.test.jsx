import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

describe('<Spinner />', () => {
  test('renders correctly', () => {
    const component = shallow(<Spinner />);
    expect(component).toMatchSnapshot();
  });
});
