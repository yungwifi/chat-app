import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOut from './Auth/SignOut';
import AuthUserContext from '../Session/sessionContext'

class Navigation extends Component {
    render() {
        return (
            <div>
                <AuthUserContext.Consumer>
                    {authUser =>
                        authUser ?
                            <ul>
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
                                    <SignOut />
                                </li>
                            </ul> :
                            <ul>
                                <li>
                                    <Link to={'/sign-in'}>Sign In</Link>
                                </li>
                                <li>
                                    <Link to={'/'}>Landing</Link>
                                </li>
                            </ul>}
                </AuthUserContext.Consumer>
            </div>
        );
    }
}

export default Navigation;