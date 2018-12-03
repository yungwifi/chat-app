import React, { Component } from 'react';
import FirebaseContext from '../fireContext'
import { Link } from 'react-router-dom'
import SignInForm from './SignInForm'

class SignIn extends Component {
    render() {
        return (
            <div>
                <h1>Sign In Page</h1>
                <FirebaseContext.Consumer>
                    {firebase => <SignInForm firebase={firebase} />}
                </FirebaseContext.Consumer>
                <p>
                    Don't have an account? <Link to={'/sign-up'}>Sign Up</Link>
                </p >
            </div >
        );
    }
}

export default SignIn;