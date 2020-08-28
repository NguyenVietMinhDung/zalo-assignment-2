// @flow
import React, { memo, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useCountUp } from 'react-countup';
import styles from './ProgressBarItem.scss';
import type { Props } from './type';

const getPercentage = value => `${value}%`;

const usePercentage = (id, targetValue) => {
  const { countUp, start } = useCountUp({
    end: targetValue,
    delay: 1000,
    suffix: '%',
  });
  useEffect(() => {
    document.addEventListener(`aos:in:${id}`, start);
    return () => document.removeEventListener(`aos:in:${id}`, start);
  });
  return countUp;
};

const ProgressBarItem = (props: Props) => {
  const { name, value, itemId } = props;
  const percentage = usePercentage(itemId, value);
  return (
    <li styleName="progress-bar-item">
      <div styleName="header">
        <div styleName="name">
          {name}
        </div>
        <div
          styleName="value"
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-offset="40"
          data-aos-id={itemId}
        >
          {percentage}
        </div>
      </div>
      <div styleName="bar">
        <div
          styleName="percentage"
          style={{ width: getPercentage(value) }}
          data-aos="slide-right"
          data-aos-offset="0"
          data-aos-duration="2000"
          data-aos-once="true"
        />
      </div>
    </li>
  );
};

export default memo<Props>(CSSModules(ProgressBarItem, styles));
