import React from 'react';
import { shallow } from 'enzyme';
import CategoryLink from './CategoryLink';

const defaultProps = {
  id: 'Other',
  name: 'Khác',
};

describe('<CategoryLink />', () => {
  test('renders correctly', () => {
    const component = shallow(<CategoryLink {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
