import React from 'react';
import { shallow } from 'enzyme';
import constants from '../../../constants';
import Footer from './Footer';

const {
  app: { socialNetworks, logoUrl },
  footer: { COPYRIGHT, SLOGAN },
} = constants;

const defaultProps = {
  copyright: COPYRIGHT,
  slogan: SLOGAN,
  socialNetworks,
  logoUrl,
};

describe('<Footer />', () => {
  test('renders correctly', () => {
    const component = shallow(<Footer {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
