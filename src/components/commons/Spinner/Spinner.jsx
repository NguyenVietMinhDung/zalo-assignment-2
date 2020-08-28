import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Spinner.scss';

const Spinner = () => (
  <div styleName="spinner">
    <div styleName="background">
      <div styleName="animated-part" />
    </div>
  </div>
);

export default memo(CSSModules(Spinner, styles));
