import React, { Component } from "react";
import Cell from "./Cell";



class Board extends Component {
  constructor(props) {
    super(props);

   
  }
  state = {
    hasWon: false,
    board: this.createBoard(),
  };

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // done : create y by x board if [[true, false ...]...]
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log("flip", coord);
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    flipCell(y, x);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);


    let hasWon = false;

    this.setState({ board, hasWon }); 
  }

  /** Render game board or winning message. */

  render() {
    let tBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];

      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          ></Cell>
        );
      }

      tBoard.push(<tr>{row}</tr>);
    }
    return (
      <div className="Board ">
        <table className="">
          <tbody>{tBoard}</tbody>
        </table>
      </div>
    );
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
  }
}
Board.defaultProps = {
  nrows: 5,
  ncols: 5,
  chanceLightStartsOn: 0.3,
};

export default Board;
