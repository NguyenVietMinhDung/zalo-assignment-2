// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.scss';
import type { Props } from './type';
import Brand from '../../commons/Brand';
import { SocialNetworks } from '../../commons';

const Footer = (props: Props) => {
  const {
    copyright, slogan, socialNetworks, logoUrl,
  } = props;
  return (
    <div
      id="footer"
      styleName="footer"
    >
      <div styleName="content">
        <div styleName="brand">
          <Brand logoUrl={logoUrl} />
        </div>
        <div styleName="slogan">{slogan}</div>
        <SocialNetworks items={socialNetworks} />
      </div>
      <div styleName="copyright">{copyright}</div>
    </div>
  );
};

export default memo<Props>(CSSModules(Footer, styles));
