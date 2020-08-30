// @flow
import React from 'react';
import './CategoryLink.scss';
import { Props, Ref } from './type';

class CategoryLink extends React.Component<Props> {
  ref: Ref;

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
    const { className } = this.props;
    if (prevProps.className !== className && className === 'is-current') {
      this.ref.current.scrollIntoView({ inline: 'center' });
    }
  }

  render() {
    const { id, name, className } = this.props;
    return (
      <li className={`category-link ${className}`} ref={this.ref}>
        <a href={`#${id}`}>{name}</a>
      </li>
    );
  }
}

export default CategoryLink;
