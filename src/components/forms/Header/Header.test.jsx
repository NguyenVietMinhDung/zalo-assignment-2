import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import constants from '../../../constants';
import Header from './Header';

const {
  header: {
    NAME, DESCRIPTION, BUTTON_TEXT, avatarUrl,
  },
  app: { socialNetworks },
} = constants;

const defaultProps = {
  btnTxt: BUTTON_TEXT,
  name: NAME,
  description: DESCRIPTION,
  socialNetworks,
  avatarUrl,
};

describe('<Header />', () => {
  test('renders correctly', () => {
    const component = shallow(<Header {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
  test('handle mousemove event', () => {
    const component = mount(<Header {...defaultProps} />);
    component.find('#header').simulate('mouseMove', { clientX: 100, clientY: 100 });
  });
  test('handle mouseout event', () => {
    const component = mount(<Header {...defaultProps} />);
    component.find('#header').simulate('mouseOut');
  });
});
