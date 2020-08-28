import React from 'react';
import { shallow } from 'enzyme';
import { skills as items } from '../../../constants/aboutMe';
import ProgressBars from './ProgressBars';

const defaultProps = {
  items,
};

describe('<ProgressBars />', () => {
  test('renders correctly', () => {
    const component = shallow(<ProgressBars {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
