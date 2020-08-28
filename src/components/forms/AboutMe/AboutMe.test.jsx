import React from 'react';
import { shallow } from 'enzyme';
import {
  TITLE, GREETING, SUMMARY, basicInfo, skills,
} from '../../../constants/aboutMe';
import AboutMe from './AboutMe';

const defaultProps = {
  title: TITLE,
  greeting: GREETING,
  summary: SUMMARY,
  basicInfo,
  skills,
};

describe('<AboutMe />', () => {
  test('renders correctly', () => {
    const component = shallow(<AboutMe {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
