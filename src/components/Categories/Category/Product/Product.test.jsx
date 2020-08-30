import React from 'react';
import { shallow } from 'enzyme';
import Product from './Product';
import categories from '../../../../constants/categories';

const defaultProps = {
  ...categories[0][0],
};

describe('<Product />', () => {
  test('renders correctly', () => {
    const component = shallow(<Product {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
