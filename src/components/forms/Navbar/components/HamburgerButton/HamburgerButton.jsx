// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './HamburgerButton.scss';
import { Props } from './type';

const getMenuIconUrl = (
  isVisible,
  closeIconUrl,
  hamburgerIconUrl,
) => (isVisible ? closeIconUrl : hamburgerIconUrl);

const HamburgerButton = (props: Props) => {
  const {
    isVisible, closeIconUrl, hamburgerIconUrl, openNavigationMenu,
  } = props;
  return (
    <img
      styleName="hamburger-btn"
      src={getMenuIconUrl(isVisible, closeIconUrl, hamburgerIconUrl)}
      alt=""
      onClick={openNavigationMenu}
    />
  );
};

export default memo<Props>(CSSModules(HamburgerButton, styles));
