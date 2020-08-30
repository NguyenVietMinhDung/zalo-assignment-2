import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import categories from '../../constants/categories';

const navbarItems = categories.map(category => ({ id: category.id, name: category.name }));

const defaultProps = {
  items: navbarItems,
};

describe('<Navbar />', () => {
  test('renders correctly', () => {
    const component = shallow(<Navbar {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
