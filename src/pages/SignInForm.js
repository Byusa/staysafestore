import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '/Users/sergebyusa/Desktop/Winter 2020/Comp 480/store/src/config/Fire.js';


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

        }).catch((error) => {
            alert(error.message);
        });
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="FormCenter">

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


                    <div className="FormField">

                        <button type="submit" onClick={this.login} className="FormField__Button mr-20"> Sign In </button>

                        <Link to="/" className="FormField__Link">Create an account </Link>
                    </div>

                </form >
            </div >
        );
    }
}

export default SignInForm;