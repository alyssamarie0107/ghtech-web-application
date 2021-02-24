// ----------------------------------------------
// developed by: alyssa rodriguez
// email: amrrodriguez@ucdavis.edu
// ----------------------------------------------

import React, {Component} from 'react'
import LoginNav from '../../components/universal/navbar/landing-login-nav/LandingLoginNavBar'
import UserLogin from '../../components/login/user-login/UserLogin'

class Login extends Component {
  render () {
    return (
      <div>
          <LoginNav/>
          <UserLogin/>
      </div>
    );
  }
}

export default Login;
