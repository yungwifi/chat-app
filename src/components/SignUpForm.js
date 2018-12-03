import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignUpForm extends Component {
    state = {
        user: {
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error: null,
        },
        redirect: false
    }
    render() {
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.firebase.doCreateUserWithEmailAndPassword(this.state.user.email, this.state.user.passwordOne)
                .then(authUser => {
                    console.log(authUser)
                    this.setState({
                        user: authUser,
                        redirect: true
                    });
                })
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

        if (this.state.redirect) {
            return (<Redirect to="/home" />)
        }

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

// const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export default SignUpForm;