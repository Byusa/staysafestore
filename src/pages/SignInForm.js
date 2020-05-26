import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/Fire.js';


class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.login = this.login.bind(this); //bind to avoid errors
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            this.props.history.push({
                pathname: '/',
            });
        }).catch((error) => {
            alert(error.message);
        });
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="FormCenter" history={this.props.history}>

                <form onSubmit={this.handleSubmit} className="FormFields">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                            className="FormField__Input" id="email" placeholder="Enter your email"
                        />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                            className="FormField__Input" id="password" placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" onClick={this.login} className="FormField__Button mr-20"> Sign In </button>
                </form >

                <Link to="/SignUP" className="FormField__Link">Create an account </Link>

            </div >
        );
    }
}

export default SignInForm;