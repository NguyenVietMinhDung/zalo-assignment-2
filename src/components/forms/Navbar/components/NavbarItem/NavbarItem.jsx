// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import zenscroll from 'zenscroll';
import styles from './NavbarItem.scss';
import type { Props } from './type';

const getStyleClass = (
  index,
  activatedIndex,
) => (index === activatedIndex ? styles['is-active'] : '');

const activate = (
  activateNavigationItem,
  index,
  openNavigationMenu,
  itemId,
) => () => {
  const element = document.getElementById(itemId);
  if (element) {
    zenscroll.to(element);
  }
  activateNavigationItem(index);
  openNavigationMenu();
};

const NavbarItem = (props: Props) => {
  const {
    index, itemId, name, url, activateNavigationItem, activatedIndex, openNavigationMenu,
  } = props;
  return (
    <li className={classNames(styles['nav-item'], getStyleClass(index, activatedIndex))}>
      <a
        styleName="content"
        href={url}
        onClick={activate(activateNavigationItem, index, openNavigationMenu, itemId)}
      >
        {name}
      </a>
    </li>
  );
};

export default memo<Props>(CSSModules(NavbarItem, styles));
