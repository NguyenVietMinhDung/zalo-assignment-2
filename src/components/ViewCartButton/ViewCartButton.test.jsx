import React from 'react';
import { shallow } from 'enzyme';
import ViewCartButton from './ViewCartButton';

describe('<ViewCartButton />', () => {
  test('renders correctly', () => {
    const component = shallow(<ViewCartButton />);
    expect(component).toMatchSnapshot();
  });
});
