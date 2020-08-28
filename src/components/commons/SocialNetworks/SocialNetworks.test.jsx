import React from 'react';
import { shallow } from 'enzyme';
import { socialNetworks as items } from '../../../constants/app';
import SocialNetworks from './SocialNetworks';

const defaultProps = {
  items,
};

describe('<SocialNetworks />', () => {
  test('renders correctly', () => {
    const component = shallow(<SocialNetworks {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
