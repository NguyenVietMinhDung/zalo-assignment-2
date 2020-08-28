/* eslint-disable jsx-a11y/no-static-element-interactions */
// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Button.scss';
import type { Props } from './type';

const Button = (props: Props) => {
  const { text, handleClickEvent } = props;
  return (
    <div
      styleName="btn"
      onClick={handleClickEvent}
    >
      { text }
    </div>
  );
};

export default memo<Props>(CSSModules(Button, styles));
