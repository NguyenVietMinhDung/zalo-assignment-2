// @flow
import React, { memo } from 'react';
import CSSModules from 'react-css-modules';
import styles from './AboutMe.scss';
import type { Props } from './type';
import BasicInformation from './components/BasicInformation';
import { ProgressBars } from '../../commons';

const AboutMe = (props: Props) => {
  const {
    title, greeting, summary, basicInfo, skills,
  } = props;
  return (
    <div
      id="about-me"
      styleName="background"
    >
      <div
        styleName="container"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <div styleName="title">{title}</div>
        <div styleName="content">
          <div styleName="introduction">
            <div styleName="greeting">{greeting}</div>
            <div>{summary}</div>
            <BasicInformation items={basicInfo} />
          </div>
          <div styleName="skills">
            <ProgressBars items={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(CSSModules(AboutMe, styles));
