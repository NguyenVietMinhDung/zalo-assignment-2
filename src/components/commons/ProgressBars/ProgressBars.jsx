// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './ProgressBars.scss';
import { Props } from './type';
import ProgressBarItem from './components/ProgressBarItem';

const ProgressBars = (props: Props) => {
  const { items } = props;
  return (
    <ul styleName="progress-bars">
      {items.map(item => (
        <ProgressBarItem
          key={item.itemId}
          {...item}
        />
      ))}
    </ul>
  );
};

export default memo<Props>(CSSModules(ProgressBars, styles));
