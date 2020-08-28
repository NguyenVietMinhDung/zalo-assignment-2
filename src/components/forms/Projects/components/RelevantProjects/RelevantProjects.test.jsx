import React from 'react';
import { shallow } from 'enzyme';
import { items } from '../../../../../constants/projects';
import RelevantProjects from './RelevantProjects';

const defaultProps = {
  items,
};

describe('<RelevantProjects />', () => {
  test('renders correctly', () => {
    const component = shallow(<RelevantProjects {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
