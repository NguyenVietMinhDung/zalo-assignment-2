import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import NavbarItem from './NavbarItem';

const defaultProps = {
  index: 2,
  activatedIndex: 0,
  name: 'Home',
  url: '#',
  activateNavigationItem: jest.fn(),
  openNavigationMenu: jest.fn(),
};

describe('<NavbarItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavbarItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('handle click event', () => {
    const component = mount(<NavbarItem {...defaultProps} />);
    component.find('a').simulate('click');
    component.setProps({ activatedIndex: 2 });
    expect(component.props().activateNavigationItem).toBeCalledWith(component.props().index);
    expect(component.props().openNavigationMenu).toBeCalled();
  });
});
