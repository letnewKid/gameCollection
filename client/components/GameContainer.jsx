import React, { Component } from 'react';
import axios from 'axios';
import GameEntry from './GameDisplay';
// This is class compenent that gets the data from a take the
class GameContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gameEntries = [];
    for (let i = 0; i < this.props.gameCollection.length; i++) {
      const currGame = this.props.gameCollection[i];
      console.log('curre game', currGame);
      gameEntries.push(
        <GameEntry
          name={currGame.name}
          console={currGame.console}
          condition={currGame.condition}
          Qty={currGame.Qty}
          comment={currGame.comment}
        />
      );
    }

    return (
      <section>
        <button
          type="button"
          onClick={e => {
            this.props.addGame();
          }}
        >
          add that game
        </button>
        <button
          type="button"
          onClick={e => {
            this.props.getGames();
          }}
          name="hello"
        >
          {' '}
          get your games
        </button>
        <section id="gameList">{gameEntries}</section>
      </section>
    );
  }
}

export default GameContainer;
