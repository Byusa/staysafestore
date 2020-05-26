import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '/Users/sergebyusa/Desktop/Winter 2020/Comp 480/store/src/config/Fire.js';


class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        alert(error.message);
    })
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">

          <div className="FormField">
            <label className="FormField__Label" htmlFor="Firstname">First Name</label>
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              name="Firstname"
              className="FormField__Input"
              id="name"
              //className={this.formErrors.Firstname.length > 0 ? "error" :  null}
              placeholder="Enter your First name"
            />
          </div>


          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Last Name</label>
            <input
              value={this.state.lastName}
              onChange={this.handleChange}
              type="text"
              name="name"
              className="FormField__Input"
              id="name"
              placeholder="Enter your Last name"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="FormField__Input"
              id="email"
              placeholder="Enter your email"
            />

          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="FormField__Input"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange} /> I agree all statements in
            <a href="" className="FormField__TermsLink"> terms of service</a>
            </label>
          </div>

          <div className="FormField">

            <button type="submit" onClick={this.signup} className="FormField__Button mr-20"> Sign up </button>

            <Link to="/SignIn" className="FormField__Link"> I'm already member </Link>
          </div>

        </form>
      </div>
    );
  }
}

export default SignUpForm;