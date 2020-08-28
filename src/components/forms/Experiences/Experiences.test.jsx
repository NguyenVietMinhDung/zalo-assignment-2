import React from 'react';
import { shallow } from 'enzyme';
import { TITLE, timeline } from '../../../constants/experiences';
import Experiences from './Experiences';

const defaultProps = {
  title: TITLE,
  timeline,
};

describe('<Educations />', () => {
  test('renders correctly', () => {
    const component = shallow(<Experiences {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
