import React from 'react';
import { shallow } from 'enzyme';
import { TITLE, items } from '../../../constants/projects';
import Projects from './Projects';

const defaultProps = {
  title: TITLE,
  items,
};

describe('<Projects />', () => {
  test('renders correctly', () => {
    const component = shallow(<Projects {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
