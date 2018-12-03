import React, { Component } from 'react';

class SignOutButton extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={() => this.props.firebase.doSignOut()}>
                    Sign Out
                </button>
            </div>
        );
    }
}

export default SignOutButton;