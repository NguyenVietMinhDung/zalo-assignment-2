import React from 'react';
import { shallow } from 'enzyme';
import { TITLE, timeline } from '../../../constants/achievements';
import Achievements from './Achievements';

const defaultProps = {
  title: TITLE,
  timeline,
};

describe('<Achievements />', () => {
  test('renders correctly', () => {
    const component = shallow(<Achievements {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
