// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './RelevantProjects.scss';
import type { Props } from './type';
import RelevantProjectItem from '../RelevantProjectItem';

const RelevantProjects = (props: Props) => {
  const { items } = props;
  return (
    <ul styleName="relevant-projects">
      {items.map(item => (
        <RelevantProjectItem
          key={item.name}
          {...item}
        />
      ))}
    </ul>
  );
};

export default memo<Props>(CSSModules(RelevantProjects, styles));
