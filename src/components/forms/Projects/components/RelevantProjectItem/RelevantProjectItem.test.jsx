import React from 'react';
import { shallow } from 'enzyme';
import { items } from '../../../../../constants/projects';
import RelevantProjectItem from './RelevantProjectItem';

const defaultProps = items[0];

describe('<RelevantProjectItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<RelevantProjectItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
