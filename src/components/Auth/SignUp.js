import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import FirebaseContext from '../../Firebase/fireContext'

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