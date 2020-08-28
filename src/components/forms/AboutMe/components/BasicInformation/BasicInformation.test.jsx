import React from 'react';
import { shallow } from 'enzyme';
import { basicInfo as items } from '../../../../../constants/aboutMe';
import BasicInformation from './BasicInformation';

const defaultProps = {
  items,
};

describe('<BasicInformation />', () => {
  test('renders correctly', () => {
    const component = shallow(<BasicInformation {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
