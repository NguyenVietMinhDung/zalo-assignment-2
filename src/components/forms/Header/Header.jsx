// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';
import type { Props } from './type';
import { Button, SocialNetworks } from '../../commons';

const handleMouseMoveEvent = (event) => {
  const element = document.getElementById('dynamic-background');
  if (element) {
    const { clientX, clientY } = event;
    const { style } = element;
    style.setProperty('transform', `translate3d(${clientX * 0.04}px, ${clientY * 0.08}px, 0)`);
  }
};

const handleMouseOutEvent = () => {
  const element = document.getElementById('dynamic-background');
  if (element) {
    const { style } = element;
    style.setProperty('transform', 'translate3d(0, 0, 0)');
  }
};

const Header = (props: Props) => {
  const {
    name, description, avatarUrl, btnTxt, socialNetworks,
  } = props;
  return (
    <div
      id="header"
      styleName="header"
      onMouseMove={handleMouseMoveEvent}
      onMouseOut={handleMouseOutEvent}
    >
      <div
        id="dynamic-background"
        styleName="dynamic-background"
      />
      <div styleName="content">
        <div styleName="introduction">
          <div styleName="greeting">HELLO, I&apos;M</div>
          <div styleName="name">{name}</div>
          <div styleName="description">{description}</div>
          <Button
            text={btnTxt}
            handleClickEvent={() => null}
          />
        </div>
        <div styleName="avatar">
          <img
            src={avatarUrl}
            alt=""
          />
        </div>
      </div>
      <div styleName="social-networks">
        <SocialNetworks items={socialNetworks} />
      </div>
    </div>
  );
};

export default memo<Props>(CSSModules(Header, styles));
