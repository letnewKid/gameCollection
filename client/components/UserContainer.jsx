/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './UserLogin';
import SignUpForm from './UserSignup';

class UserContainer extends Component {
  constructor() {
    super();

    this.state = {
      loginSubmited: false,
      userVerified: true,
      userSignedUp: true,

      loginRoute: '/login',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleLogin(logindata) {
    const newState = Object.assign({}, this.state);
    newState.loginSubmited = true;
    console.log(logindata);
    // axios.post('http://http://localhost:3000/login', { username }).then(res => {
    //   console.log();
    // });

    // onclick of submit button sets loginSubmited to true
    // makes axios request to localhost: 3000 at loginRoute
    // if user is verified
    // if true sets userVerified to true
  }

  handleSignUp() {
    const newState = Object.assign({}, this.state);
    newState.user;
  }

  render() {
    const formCondition = this.state.userVerified;
    let form;
    if (!formCondition) {
      form = <LoginForm loginHandler={this.handleLogin} />;
    } else {
      form = <SignUpForm signUpHandler={this.handleSignUp} />;
    }
    return <div className="userContainer">{form}</div>;
  }
}

export default UserContainer;
