/* eslint-disable react/prop-types */
import React, { Component } from 'react';
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
      gameEntries.push(
        <GameEntry
          name={currGame.name}
          console={currGame.console}
          condition={currGame.condition}
          Qty={currGame.Qty}
          comment={currGame.comment}
          Id={i}
        />
      );
    }

    return (
      <section>
        <h1>The Collection</h1>
        <form id="gameInputForm">
          <input className="gameInputField" type="text" placeholder="name" />
          <input className="gameInputField" type="text" placeholder="console" />
          <input
            className="gameInputField"
            type="text"
            placeholder="condition"
          />
          <input className="gameInputField" type="text" placeholder="Qty" />
          <input className="gameInputField" type="text" placeholder="comment" />
          <button
            type="button"
            id="getGames"
            onClick={() => {
              const textValues = document.querySelectorAll('.gameInputField');
              const text = Array.from(textValues).map(elm => elm.value);
              const [name, console, condition, qty, comment] = text;
              const gameEntryObject = {};
              gameEntryObject.name = name;
              gameEntryObject.console = console;
              gameEntryObject.condition = condition;
              gameEntryObject.qty = qty;
              gameEntryObject.comment = comment;

              this.props.addGame(gameEntryObject);
            }}
          >
            add that game
          </button>
        </form>
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
