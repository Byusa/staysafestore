import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import fire from '../config/Fire.js';



export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  //logout button
  logout() {
    try {
      fire.auth().signOut();
    }
    catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>


        <Link to="/" className="nav-link" >
          products
        </Link>

        <Link to='/cart' className="ml-auto">
          <ButtonContainer className="nav-link" >
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
            </ButtonContainer>
        </Link>

        <Link to="/Login" >
          <ButtonContainer onClick={this.logout} className="nav-link" >
            <span className="mr-2" >
              <i className="fas fa-sign-out-alt" />
            </span>
            Log out
          </ButtonContainer>
        </Link>

      </NavWrapper>
    )
  }
}


const NavWrapper = styled.nav`
background: var(--darkGreen);
.nav-link{
  color:var(--mainWhite) !important;
  font-size;1.3rem;
  text-transform: capitalize;
}
`;

