import { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import { calcBestMove, calcWinner } from "../helpers/calcSquares";
import { ModalContext } from "./ModalContext";

const GameContext = createContext()

const GameState = ({ children }) => {

  const { showModal, setModalMode , hideModal } = useContext(ModalContext)

  const [screen, setScreen] = useState('start'); // start || game

  const [activeUser, setActiveUser] = useState('x'); // x || o
  const [playMode, setPlayMode] = useState('user'); // user || computer

  const [squares, setSquares] = useState(new Array(9).fill(''));
  const [xNext, setXNext] = useState(false);

  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);

  const [ties , setTies] = useState({x: 0, o: 0});

  useEffect(() => {
    checkNoWinner()

    const currentUser = xNext ? "o" : "x";

    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextCpu(squares)
    }

    // eslint-disable-next-line
  } , [xNext , winner , screen]);

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen('game');
  }

  const handleSquareClick = (ix) => {

    if (squares[ix] || winner) {
      return;
    }

    const currentUser = xNext ? "o" : "x";

    if (playMode === "cpu" && currentUser !== activeUser) {
      return
    }

    let ns = [...squares];
    ns[ix] = !xNext ? 'x' : 'o';

    setSquares(ns);
    setXNext(!xNext);

    checkWinner(ns);

  };

  const checkWinner = (ns) => {
    const isWinner = calcWinner(ns);

    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);

      const ti = {...ties};
      ti[isWinner.winner] = ti[isWinner.winner] + 1;

      setTies(ti)
      showModal();
      setModalMode("winner");

    }
  }

  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (moves.length === 0) {
      setWinner("no");
      showModal();
      setModalMode("winner");
    }
  }

  const handleReset = () => {
    setSquares(new Array(9).fill(''));
    setXNext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser('x');
    setTies({x: 0, o: 0});
    hideModal();
    setScreen('start');
  }

  const handelNextRound = () => {
    setSquares(new Array(9).fill(''));
    setXNext(winner === 'x');
    setWinner(null);
    setWinnerLine(null);
    hideModal();
  }

  const cpuNextCpu = (sq) => {
    const bestMove = calcBestMove(sq, activeUser === 'x' ? 'o' : 'x');
    if (bestMove !== null) {
      let ns = [...sq];
      ns[bestMove] = activeUser === 'x' ? 'o' : 'x'; 
      setSquares(ns);
      setXNext(!xNext);
      checkWinner(ns);
    }
  };
  

  return (
    <GameContext.Provider value={{
      screen, setScreen,
      activeUser, setActiveUser,
      changePlayMode,
      handleSquareClick, squares,
      xNext, ties,
      handleReset , handelNextRound ,
      winner, winnerLine,
      playMode
    }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameState }