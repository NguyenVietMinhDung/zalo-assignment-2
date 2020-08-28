// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './NavbarMenu.scss';
import type { Props } from './type';
import NavbarItem from '../NavbarItem';

const getStyleClass = isVisible => (isVisible ? styles['is-visible'] : styles['is-invisible']);

const NavbarMenu = (props: Props) => {
  const {
    items, activatedIndex, isVisible, activateNavigationItem, openNavigationMenu,
  } = props;
  return (
    <div styleName="nav-menu">
      <ul className={classNames(styles.content, getStyleClass(isVisible))}>
        {items.map((item, index) => (
          <NavbarItem
            key={item.name}
            index={index}
            activatedIndex={activatedIndex}
            activateNavigationItem={activateNavigationItem}
            openNavigationMenu={openNavigationMenu}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
};

export default memo<Props>(CSSModules(NavbarMenu, styles));
