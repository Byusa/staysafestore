import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProdcutList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import fire from '/Users/sergebyusa/Desktop/Winter 2020/Comp 480/store/src/config/Fire.js';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    //logout button
    logout() {
        fire.auth().signOut();
    }
  render() {
    return (
      <React.Fragment>

        <Navbar />

        <Switch>
          <Route exact path="/ProdcutList" component={ProdcutList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart}/>

          <Route component={Default} />
        </Switch>


        <Modal />
        
      </React.Fragment>
    );
  }
}

export default Home;
//<Route path="/cart" component={Cart} />

//                <button onClick={this.logout}> Logout</button>