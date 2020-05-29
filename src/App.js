import React, { Component } from 'react';
import fire from './config/Fire';
import Home from './Home';
import ProdcutList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from './components/Modal';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
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
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignUP" component={SignUp} />
            <Route exact path="/ProdcutList" component={ProdcutList} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/Home" component={Home} />
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