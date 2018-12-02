import React, { Component } from 'react';
import Firebase from '../fire';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends Component {
    state = {
        user: {
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        }
    }
    render() {
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.firebase.doCreateUserWithEmailAndPassword(this.state.user.email, this.state.user.passwordOne)
                .then(authUser => {
                    this.setState({ ...this.state.user });
                    this.props.history.push('/')
                })
                .catch(error => {
                    this.setState({ error });
                });
        }

        this.handleChange = (e) => {
            const user = { ...this.state.user }
            user[e.target.name] = e.target.value
            console.log("HANDLE CHANGE EVENT", e.target.name, e.target.value)
            this.setState({ user })
        };

        const isInvalid =
            this.state.user.passwordOne !== this.state.user.passwordTwo ||
            this.state.user.passwordOne === '' ||
            this.state.user.email === '' ||
            this.state.userusername === '';

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.handleChange} name="username" type="text" placeholder="username" />
                    <input onChange={this.handleChange} name="email" type="text" placeholder="email" />
                    <input onChange={this.handleChange} name="passwordOne" type="password" placeholder="password" />
                    <input onChange={this.handleChange} name="passwordTwo" type="password" placeholder=" confirm password" />
                    <button disabled={isInvalid}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;