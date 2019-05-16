/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './UserLogin';
import SignUpForm from './UserSignup';

class UserContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: '',
      loginSubmited: false,
      gameCollection: [],
      userVerified: false,
      userSignedUp: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidUpdate() {
    // makes request to seed route to populate date
    if (!this.state.userSignedUp) {
      axios
        .post('http://localhost:3000/seed', { user: this.state.currentUser })
        .then(res => console.log('Database has been seeded', res))
        .catch(err => console.error('this is a seed', err));
    }

    this.getGameCollection(this.state.currentUser);
  }

  getGameCollection(user) {
    // requests from the get express route that has the getAll Games middleware
    // in the post request send the user to the express server
    // it takes that infromation and populates the gameCollection array
    // the game collection array should be passed into the gameContainer that renders the Game displays that will be each gameEntry
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

  handleSignUp(signUpData) {
    const { username, password } = signUpData;
    axios
      .post('http://localhost:3000/signUp', { username, password })
      .then(res => {
        const { user } = res.data;
        const newState = Object.assign({}, this.state);
        newState.currentUser = user;
        newState.userSignedUp = true;
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  render() {
    const formCondition = this.state.userVerified;
    let form;
    if (formCondition) {
      form = <LoginForm loginHandler={this.handleLogin} />;
    } else {
      form = <SignUpForm signUpHandler={this.handleSignUp} />;
    }
    return <div className="userContainer">{form}</div>;
  }
}

export default UserContainer;
