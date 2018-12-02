import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom'
import FirebaseContext from '../fireContext'

class SignUp extends Component {
    render() {
        return (
            <div>
                <h1>Sign Up Page</h1>
                <FirebaseContext.Consumer>
                    {firebase => <SignUpForm firebase={firebase} />}
                </FirebaseContext.Consumer>
            </div>
        );
    }
}

export default SignUp;