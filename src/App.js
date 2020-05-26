import React, { Component } from 'react';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';
import ProdcutList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from './components/Modal';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  /*render() {
    return (
      <div>
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }*/
  render() {
    return (
      <div>
        <Router>


          <Switch>
            <Route exact path="/" component={ProdcutList} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/SignUP" component={SignUpForm}/>
            <Route path="/SignIn" component={SignInForm}/>
          </Switch>

          <Modal />

        </Router>

      </div>
    );
  }

}

export default App;

/*
<Route component={Default} />
*/