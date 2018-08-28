import React, { Fragment, Component } from 'react';
import Slideshow from './Slideshow';
import AboutSection from './AboutSection';
import SickPano from './SickPano';
import YouTubePlug from './YouTubePlug';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Slideshow />
        <AboutSection />
        <SickPano />
        <YouTubePlug />
      </Fragment>
    );
  }
}
