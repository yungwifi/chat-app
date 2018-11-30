import React, { Component } from 'react';

class SignUpForm extends Component {
    render() {
        this.onSubmit = (event) => {
            console.log(event)
        }

        this.onChange = (event) => {
            console.log(event)
        };
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="username" ></input>
                    <input placeholder="email" ></input>
                    <input placeholder="password" ></input>
                    <input placeholder=" confirm password" ></input>
                    <button>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;