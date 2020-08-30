import React from 'react';
import { shallow } from 'enzyme';
import Categories from './Categories';
import categories from '../../constants/categories';

const defaultProps = {
  categories,
};

describe('<Categories />', () => {
  test('renders correctly', () => {
    const component = shallow(<Categories {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
