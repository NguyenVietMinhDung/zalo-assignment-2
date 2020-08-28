import React from 'react';
import { shallow } from 'enzyme';
import { timeline } from '../../../constants/experiences';
import TimeLine from './TimeLine';

const { items } = timeline;

const defaultProps = {
  items,
};

describe('<TimeLine />', () => {
  test('renders correctly', () => {
    const component = shallow(<TimeLine {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
