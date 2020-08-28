import React from 'react';
import { shallow } from 'enzyme';
import { TITLE, timeline } from '../../../constants/educations';
import Educations from './Educations';

const defaultProps = {
  title: TITLE,
  timeline,
};

describe('<Educations />', () => {
  test('renders correctly', () => {
    const component = shallow(<Educations {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
