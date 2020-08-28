import React from 'react';
import { shallow } from 'enzyme';
import { logoUrl } from '../../../constants/app';
import Brand from './Brand';

const defaultProps = {
  logoUrl,
};

describe('<Brand />', () => {
  test('renders correctly', () => {
    const component = shallow(<Brand {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
