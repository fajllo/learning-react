import React, { Component } from "react";
import Cell from "./Cell";

class Board extends Component {

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

    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board, hasWon });
  }

  handleClick = () => {
    this.setState({ hasWon: false, board: this.createBoard() });
  };

  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon) {
      return (
        <div className="Board">
          <h1 className="mb-9">
            <span className="text-orange-300 text-8xl"> you_</span>
            <span className="text-8xl text-violet-300">_won!</span>
          </h1>
          <button className="relative" onClick={this.handleClick}>
            <div className="absolute inset-x-0 h-full -bottom-1 -right-1 px-12 py-2 bg-violet-300 border "></div>
            <div className="relative px-12 py-2 bg-orange-300 border ">
              <h1 className="text-violet-800">
                <span className=" text-2xl"> play_</span>
                <span className="text-2xl ">_again</span>
              </h1>
            </div>
          </button>
        </div>
      );
    }

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
      <div className="Board mx-auto">
        <h1 className="mb-9 self-center ">
          <span className="text-orange-300 text-8xl"> lights_</span>
          <span className="text-8xl text-violet-300">_out</span>
        </h1>
        <table className="">
          <tbody>{tBoard}</tbody>
        </table>
      </div>
    );
  }
}
Board.defaultProps = {
  nrows: 5,
  ncols: 5,
  chanceLightStartsOn: 0.3,
};

export default Board;
