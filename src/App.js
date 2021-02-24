import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap import
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../src/screens/landing/Landing'
import Login from '../src/screens/login/Login'
import Contacts from '../src/screens/contacts/Contacts'
import Chat from '../src/screens/chat/Chat'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {Landing}/>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/contacts" component = {Contacts}/>
          <Route exact path = "/chat" component = {Chat}/>
        </Switch>
      </Router>
    );
  }
}

// wrap the export of the App component using the withFirebaseAuth HOC:
export default App
