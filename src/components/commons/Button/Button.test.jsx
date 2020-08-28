import React from 'react';
import { shallow } from 'enzyme';
import { BUTTON_TEXT } from '../../../constants/header';
import Button from './Button';

const defaultProps = {
  text: BUTTON_TEXT,
  handleClickEvent: jest.fn(),
};

describe('<Button />', () => {
  test('renders correctly', () => {
    const component = shallow(<Button {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
