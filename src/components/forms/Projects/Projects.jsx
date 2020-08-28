// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Projects.scss';
import type { Props } from './type';
import RelevantProjects from './components/RelevantProjects';

const Projects = (props: Props) => {
  const { title, items } = props;
  return (
    <div
      id="relevant-projects"
      styleName="background"
    >
      <div
        styleName="container"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div styleName="title">{title}</div>
        <div styleName="content">
          <RelevantProjects items={items} />
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(CSSModules(Projects, styles));
