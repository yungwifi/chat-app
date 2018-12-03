import React, { Component } from 'react'
import FirebaseContext from '../fireContext'
import SignOutButton from './SignOutButton'

class SignOut extends Component {
    render() {
        return (
            <div>
                <FirebaseContext.Consumer>
                    {firebase => <SignOutButton firebase={firebase} />}
                </FirebaseContext.Consumer>
            </div>
        );
    }
}

export default SignOut;