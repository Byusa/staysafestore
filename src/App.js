import React, { Component } from 'react';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';
import './App.css';



class App extends Component {
  //get rid of this or use it 
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  //this is called once in the component life Cycle
  componentDidMount() {
    this.authListener();
  }

  //log in or out
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }

}

export default App;