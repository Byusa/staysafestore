import React, { Component } from 'react';
import SignInForm from './SignInForm';
import LoginDesign from './LoginDesign';

class SignIn extends Component {


    render() {
        return (
            <div>
                <div className="App" history={this.props.history}>
                    <div className="App__Aside"/>
                    <div className="App__Form">
                        <LoginDesign/>
                        <SignInForm />
                    </div>

                </div>
            </div>
        );
    }
}

export default SignIn;


/*
<Route exact path="/" component={SignInForm} />
            <Route exact path="/SignUP" component={SignUpForm} />
*/