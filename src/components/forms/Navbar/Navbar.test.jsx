import React from 'react';
import { shallow } from 'enzyme';
import props from '../../../constants/navbar';
import Navbar from './Navbar';

const defaultProps = {
  ...props,
  activatedIndex: 0,
  isVisible: false,
  activateNavigationItem: jest.fn(),
  openNavigationMenu: jest.fn(),
};

describe('<Navbar />', () => {
  test('renders correctly', () => {
    const component = shallow(<Navbar {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
