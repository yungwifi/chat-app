import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PasswordForget from './components/PasswordForget'
import Home from './components/Home'
import Account from './components/Account'
import Admin from './components/Admin'
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/sign-up'} component={SignUp} />
            <Route path={'/sign-in'} component={SignIn} />
            <Route path={'/forgot-password'} component={PasswordForget} />
            <Route path={'/home'} component={Home} />
            <Route path={'/my-account'} component={Account} />
            <Route path={'/admin'} component={Admin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
