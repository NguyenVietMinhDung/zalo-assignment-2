// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './SocialNetworks.scss';
import type { Props } from './type';
import SocialNetworkItem from './components/SocialNetworkItem';

const SocialNetworks = (props: Props) => {
  const { items } = props;
  return (
    <ul styleName="social-networks">
      {items.map(item => (
        <SocialNetworkItem
          key={item.name}
          {...item}
        />
      ))}
    </ul>
  );
};

export default memo<Props>(CSSModules(SocialNetworks, styles));
