// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React, {Component} from 'react'
import LandingNav from '../../components/universal/navbar/landing-login-nav/LandingLoginNavBar'
import Welcome from '../../components/landing/welcome/Welcome'

class Landing extends Component {
  render () {
    return (
      <div>
          <LandingNav/>
          <Welcome/>
      </div>
    );
  }
}

export default Landing;
