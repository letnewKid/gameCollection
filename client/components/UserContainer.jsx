/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from './UserLogin';
import SignUpForm from './UserSignup';
import GameContainer from './GameContainer';
import GameEntry from './GameDisplay';

class UserContainer extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: 'tevin',
      loginSubmited: false,
      gameCollection: [],
      totalGames: 0,
      newGame: {},
      userVerified: false,
      userSignedUp: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.getGameCollection = this.getGameCollection.bind(this);
    this.addGame = this.addGame.bind(this);
  }

  getGameCollection() {
    axios
      .get('http://localhost:3000/gameAll', {
        params: { currentUser: this.state.currentUser },
      })
      .then(res => {
        const newState = Object.assign({}, this.state);
        res.data.forEach(game => {
          newState.gameCollection.push(game);
        });
        this.setState(newState);
      })
      .catch(err => console.error(err));
  }

  addGame() {
    axios
      .post('http://localhost:3000/addGame', { user: this.state.currentUser })
      .then(res => console.log('Database has been seeded', res))
      .catch(err => console.error('this is a seed', err));
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
        newState.loginSubmited = true;
        this.setState(newState);
      })
      .catch(err => console.log(err));
    console.log('this is the user', this.state.currentUser);
  }

  render() {
    const formCondition = this.state.loginSubmited;
    let userOutput;
    if (formCondition) {
      // userOutput = <LoginForm loginHandler={this.handleLogin} />;
      // const gameEntries = [];
      // for (let i = 0; i < this.state.gameCollection.length; i++) {
      //   const currGame = this.state.gameCollection[i];
      //   gameEntries.push(
      //     <GameEntry
      //       name={currGame.name}
      //       console={currGame.console}
      //       condition={currGame.condition}
      //       Qty={currGame.Qty}
      //       comment={currGame.comment}
      //     />
      //   );
      // }
      userOutput = (
        <div>
          <GameContainer
            gameCollection={this.state.gameCollection}
            getGames={this.getGameCollection}
            user={this.state.currentUser}
            addGame={this.addGame}
          />
        </div>
      );
    } else if (!formCondition) {
      userOutput = <SignUpForm signUpHandler={this.handleSignUp} />;
    }
    return <div className="userContainer">{userOutput}</div>;
  }
}

export default UserContainer;
