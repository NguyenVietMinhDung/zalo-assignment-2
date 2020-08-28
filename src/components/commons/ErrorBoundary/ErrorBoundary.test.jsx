import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

const defaultProps = {
  children: <h1>Child Component</h1>,
};

describe('<ErrorBoundary />', () => {
  test('renders correctly', () => {
    const component = shallow(<ErrorBoundary {...defaultProps} />);
    expect(component).toMatchSnapshot();
  });
});
