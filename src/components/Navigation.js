import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/sign-in'}>Sign In</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Landing</Link>
                    </li>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/my-account'}>Account</Link>
                    </li>
                    <li>
                        <Link to={'/admin'}>Admin</Link>
                    </li>
                    <li>
                        <Link to={'/sign-up'}>Sign Up</Link>
                    </li>
                    <li>
                        <SignOut />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;