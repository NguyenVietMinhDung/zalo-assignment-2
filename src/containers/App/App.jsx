// @flow
import React, { memo } from 'react';
import type { Props } from './type';
import constants from '../../constants';
import forms from '../../components/forms';

const {
  header, footer, aboutMe, app, navbar, experiences, educations, projects, achievements,
} = constants;

const {
  Navbar, Header, Footer, AboutMe, Experiences, Educations, Projects, Achievements,
} = forms;

const App = (props: Props) => (
  <>
    <Navbar
      items={navbar.items}
      hamburgerIconUrl={navbar.hamburgerIconUrl}
      closeIconUrl={navbar.closeIconUrl}
      logoUrl={app.logoUrl}
      {...props}
    />
    <Header
      name={header.NAME}
      description={header.DESCRIPTION}
      btnTxt={header.BUTTON_TEXT}
      avatarUrl={header.avatarUrl}
      socialNetworks={app.socialNetworks}
    />
    <AboutMe
      title={aboutMe.TITLE}
      greeting={aboutMe.GREETING}
      summary={aboutMe.SUMMARY}
      basicInfo={aboutMe.basicInfo}
      skills={aboutMe.skills}
    />
    <Experiences
      title={experiences.TITLE}
      timeline={experiences.timeline}
    />
    <Projects
      title={projects.TITLE}
      items={projects.items}
    />
    <Educations
      title={educations.TITLE}
      timeline={educations.timeline}
    />
    <Achievements
      title={achievements.TITLE}
      timeline={achievements.timeline}
    />
    <Footer
      slogan={footer.SLOGAN}
      copyright={footer.COPYRIGHT}
      socialNetworks={app.socialNetworks}
      logoUrl={app.logoUrl}
    />
  </>
);

export default memo<Props>(App);
