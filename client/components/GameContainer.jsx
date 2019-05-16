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
      console.log('curre game', currGame);
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
        <form id="gameInputform">
          <input className="gameinputField" type="text" placeholder="name" />
          <input className="gameinputField" type="text" placeholder="console" />
          <input
            className="gameinputField"
            type="text"
            placeholder="condition"
          />
          <input className="gameinputField" type="text" placeholder="Qty" />
          <input className="gameinputField" type="text" placeholder="comment" />
        </form>
        <button
          type="button"
          onClick={() => {
            const textValues = document.querySelectorAll('.gameinputField');
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
