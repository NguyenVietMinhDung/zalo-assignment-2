// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialNetworkItem.scss';
import type { Props } from './type';

const SocialNetworkItem = (props: Props) => {
  const { url, iconUrl } = props;
  return (
    <li>
      <a href={url}>
        <img styleName="social-network-item" src={iconUrl} alt="" />
      </a>
    </li>
  );
};

export default memo<Props>(CSSModules(SocialNetworkItem, styles));
