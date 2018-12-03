import React, { Component } from 'react';
import firebase from '../fire'

class SignOut extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={firebase.doSignOut}>
                    Sign Out
                </button>
            </div>
        );
    }
}

export default SignOut;