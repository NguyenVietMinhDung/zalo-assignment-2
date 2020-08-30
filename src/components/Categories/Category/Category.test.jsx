import React from 'react';
import { shallow } from 'enzyme';
import Category from './Category';
import categories from '../../../constants/categories';

const defaultProps = {
  ...categories[0],
};

describe('<Category />', () => {
  test('renders correctly', () => {
    const component = shallow(<Category {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
