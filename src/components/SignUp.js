import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom'

class SignUp extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up Page</h1>
                <SignUpForm />
            </div>
        );
    }
}

export default SignUp;