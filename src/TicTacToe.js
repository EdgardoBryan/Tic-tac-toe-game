import React from "react";
import { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = (props) => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  const checkForWinner = (squares) => {
    let winningCombos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      dia: [
        [0, 4, 8],
        [2, 5, 6],
      ],
    };

    for (let combo in winningCombos) {
      winningCombos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {

        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner([pattern[0]])
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }

    let squares = [...cells];

    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }
    checkForWinner(squares)
    setCells(squares);
  };
  const handleRestart = () => {
    setCells(Array(9).fill(""));
    setWinner(null);
  };
  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      <table>
        Turn:{turn}
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p> {winner} is the winner!</p>
          <button onClick={() => handleRestart()}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
