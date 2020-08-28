import React from 'react';
import { shallow } from 'enzyme';
import { basicInfo as items } from '../../../../../constants/aboutMe';
import BasicInformationItem from './BasicInformationItem';

const defaultProps = items[0];

describe('<BasicInformationItem />', () => {
  test('renders correctly', () => {
    const component = shallow(<BasicInformationItem {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
