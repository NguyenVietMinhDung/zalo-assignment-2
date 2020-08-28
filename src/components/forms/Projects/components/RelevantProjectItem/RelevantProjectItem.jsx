// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './RelevantProjectItem.scss';
import type { Props } from './type';
import utils from '../../../../../utils';

const RelevantProjectItem = (props: Props) => {
  const {
    name, role, description, startDate, endDate,
  } = props;
  const { date: { getDuration } } = utils;
  const duration = getDuration(startDate, endDate);
  return (
    <li styleName="relevant-project-item">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-offset="100"
        styleName="name"
      >
        {name}
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        data-aos-offset="100"
        styleName="summary"
      >
        <div styleName="description">{description}</div>
        <div styleName="role">{role}</div>
        <div styleName="duration">
          <i className="lni-calendar" />
          &nbsp;&nbsp;{duration}
        </div>
      </div>
    </li>
  );
};

export default memo<Props>(CSSModules(RelevantProjectItem, styles));
