import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      X_PLAYER: "X",
      O_PLAYER: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    }
	this.victorious = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  }

  handleClick(idx) {
    if(this.state.board[idx] === "" && !this.state.winner) {
      this.state.board[idx] = this.state.currentTurn;
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.X_PLAYER ? this.state.O_PLAYER : this.state.X_PLAYER,
      })
	  console.log(this.searchForWinner());
    }
  }

  searchForWinner() {
    var currentTurn = this.state.currentTurn;
    var symbols = this.state.board;
	var that = this;
    return this.victorious.find(function(combo) {
      if(symbols[combo[0]] !== "" && symbols[combo[1]] !== ""  && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
		that.setState({winner: currentTurn});
        return currentTurn;
      } else {
        return false;
      }
    })
  }

  render() {
    return (
      <div className="app-container">
        {this.state.winner ? <h1>{`The winner is ${this.state.winner}`}</h1> : null}
        <div className="board">
        {this.state.board.map((cell, idx) => {
          return <div onClick={() => this.handleClick(idx)} className="square"><p>{cell}</p></div>;
        })}
        </div>
      </div>
    )
  }
}


export default App;
