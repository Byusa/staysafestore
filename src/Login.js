import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';

class Login extends Component {
    

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
          </div>
          
          <div className="App__Form">

            <div className="PageSwitcher">
              <NavLink to="/SignIn" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign In
              </NavLink>
              <NavLink exact to="/SignUP" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/SignIn" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In
              </NavLink> or
              <NavLink exact to="/SignUP" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up
              </NavLink>
            </div>


            <Route exact path="/SignIn" component={SignInForm}/>
            <Route exact path="/SignUP" component={SignUpForm}/>



          </div>

        </div>
      </Router>
    );
  }
}

export default Login;
