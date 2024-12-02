import Board from "./components/board/Board";
import Modal from "./components/model/Modal";
import Start from "./components/start/Start";
import { GameContext } from "./context/GameContext";
import { useContext } from "react";


function App() {

  const { screen } = useContext(GameContext);

  return (
    // App container
    <div className="App">
      {/* container */}
      <div className="container">

      {screen === 'start' && <Start/>}
      {screen === 'game' && <Board/>}

      </div>
      {/* === container === */}

      <Modal />
    </div>
    // === App container ===
  );
}

export default App;
