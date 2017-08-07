
import ReactDOM from 'react-dom';
import App from '../src/App';


var assert = require('chai').assert;
var expectC = require('chai').expect;
import * as React from 'react';
import {renderIntoDocument} from 'react-addons-test-utils';
import expect from 'expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const item = renderIntoDocument(<App />);
  expect(item).toExist();
});

describe('Test game functions', function() {
    const item = renderIntoDocument(
            <App />
            );
    expect(item).toExist();
	it('should handle clicks', () =>{
		item.handleClick(0);
		const board = ["X", "", "", "", "", "", "", "", ""];

		expectC(item.state.board[0]).to.equal("X");
	});


	it('should find a winner', () => {
		const board_win = ["X", "X", "X", "O", "O", "", "", "", ""];
		item.setState({currentTurn: "X", board: board_win});
		item.searchForWinner();
		expectC(item.state.winner).to.equal("X");
		assert.typeOf(item.searchForWinner(), 'array');

		
	})
});
