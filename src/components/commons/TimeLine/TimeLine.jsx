// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './TimeLine.scss';
import { Props } from './type';
import Event from './components/Event';

const TimeLine = (props: Props) => {
  const { iconClassName, items } = props;
  return (
    <div styleName="timeline">
      <div styleName="icon">
        <div styleName="contour">
          <i className={`${iconClassName} size-sm`} />
        </div>
      </div>
      <ul styleName="events">
        {items.map(item => <Event {...item} />)}
      </ul>
    </div>
  );
};

export default memo<Props>(CSSModules(TimeLine, styles));
