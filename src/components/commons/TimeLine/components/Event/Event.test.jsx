import React from 'react';
import { shallow } from 'enzyme';
import { timeline as items } from '../../../../../constants/experiences';
import Event from './Event';

const defaultProps = items[0];

describe('<Event />', () => {
  test('renders correctly', () => {
    const component = shallow(<Event {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
