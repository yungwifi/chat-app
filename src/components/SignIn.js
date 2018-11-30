import React, { Component } from 'react';
import SignUp from './SignUp';
import { Link } from 'react-router-dom'

class SignIn extends Component {
    render() {
        return (
            <div>
                <h1>Sign In Page</h1>
                <p>
                    Don't have an account? <Link to={'/sign-up'}>Sign Up</Link>
                </p >
            </div >
        );
    }
}

export default SignIn;