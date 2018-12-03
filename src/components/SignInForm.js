import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SignInForm extends Component {
    state = {
        user: {
            email: '',
            password: '',
        },
        error: null,
        redirect: false
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.firebase.doSignInWithEmailAndPassword(this.state.user.email, this.state.user.password)
            .then(() => {
                this.setState({
                    user: this.state.user,
                    redirect: true
                });
            })
            .catch(error => {
                this.setState({ error });
            });
    };

    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        console.log("HANDLE CHANGE EVENT", e.target.name, e.target.value)
        this.setState({ user })
    };
    render() {

        const isInvalid = this.state.user.password === '' || this.state.user.email === '';

        if (this.state.redirect) {
            return (<Redirect to="/home" />)
        }

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="email" onChange={this.handleChange} type="text" placeholder="Email Address" />
                    <input name="password" onChange={this.handleChange} type="password" placeholder="Password" />
                    <button disabled={isInvalid} type="submit">
                        Sign In
                    </button>
                    {this.state.error && <p>{this.state.error.message}</p>}
                </form>
            </div>
        );
    }
}

export default SignInForm;