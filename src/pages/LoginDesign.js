import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


export class LoginDesign extends Component {
    render() {
        return (
            <div>
                <div className="PageSwitcher">
                    <Link to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item ">Sign In </Link>
                    <Link exact to="/SignUP" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item"> Sign Up </Link>
                </div>

                <div className="FormTitle">
                    <Link to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In </Link>
                    or
                            <Link exact to="/SignUP" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up </Link>
                </div>
            </div>
        )
    }
}

export default LoginDesign
