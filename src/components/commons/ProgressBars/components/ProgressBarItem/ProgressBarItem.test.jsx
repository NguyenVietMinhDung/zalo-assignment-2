import React from 'react';
import { shallow } from 'enzyme';
import { skills as items } from '../../../../../constants/aboutMe';
import ProgressBarItem from './ProgressBarItem';

const defaultProps = items[0];

describe('<ProgressBarItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<ProgressBarItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
