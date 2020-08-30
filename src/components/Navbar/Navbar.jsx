// @flow
import React from 'react';
import Scrollspy from 'react-scrollspy';
import './Navbar.scss';
import { Props } from './type';
import CategoryLink from './CategoryLink';

const Navbar = (props: Props) => {
  const { items } = props;
  return (
    <div className="navbar">
      <Scrollspy items={items.map(item => item.id)} className="navbar__menu" currentClassName="is-current">
        {items.map(item => (
          <CategoryLink key={item.id} {...item} />
        ))}
      </Scrollspy>
      <div className="navbar__search">
        <i className="lni lni-32 lni-search-alt" />
      </div>
    </div>
  );
};

export default Navbar;
