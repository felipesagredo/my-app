import React from 'react';
import logo from '../img/logo.svg';
import '../css/Tictactoe.css';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            console.log('El ganador es: ' + squares[a]);
            return squares[a];
        } 
    }

    return null;
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            console.log('Jugador: ' + squares[i]);
            console.log('Turno Siguienteee: ' + (this.state.xIsNext ? 'X' : 'O'));
            
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
    return <Square 
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
    />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        let nextPlayer;

        if (winner) {
            status = 'Ganador: ' + winner;
        } else {
            status = 'Ahora juega: ' + (this.state.xIsNext ? 'X' : 'O');
            nextPlayer = 'Turno Siguiente: ' + (this.state.xIsNext ? 'O' : 'X');
        }

        return (
        <div className="contenido">
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
            <img src={logo} className="App-logo-sc" alt="logo" />
            <div className='NexPlayer'>{nextPlayer}</div>
            <p>Tic-Tac-Toe!</p>

        </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}
export default Game;