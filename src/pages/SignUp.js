import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import LoginDesign from './LoginDesign';


class SignUp extends Component {


    render() {
        return (
            <div>
                <div className="App">
                    <div className="App__Aside"/>
                    <div className="App__Form">
                        <LoginDesign />
                        <SignUpForm />
                    </div>

                </div>
            </div>
        );
    }
}

export default SignUp;


/*
<Route exact path="/" component={SignInForm} />
            <Route exact path="/SignUP" component={SignUpForm} />
*/
