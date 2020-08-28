// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Achievements.scss';
import type Props from './type';
import { TimeLine } from '../../commons';

const Achievements = (props: Props) => {
  const { title, timeline } = props;
  return (
    <div
      id="my-achievements"
      styleName="background"
    >
      <div
        styleName="container"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div styleName="title">{title}</div>
        <div styleName="content">
          <TimeLine {...timeline} />
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(CSSModules(Achievements, styles));
