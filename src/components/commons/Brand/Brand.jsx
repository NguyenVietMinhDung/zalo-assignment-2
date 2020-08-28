// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Brand.scss';
import type { Props } from './type';

const Brand = (props: Props) => {
  const { logoUrl } = props;
  return (
    <div styleName="brand">
      <img
        src={logoUrl}
        alt=""
      />
    </div>
  );
};

export default memo<Props>(CSSModules(Brand, styles));
