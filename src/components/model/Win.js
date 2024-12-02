import React, { useContext } from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { GameContext } from '../../context/GameContext'

const Win = () => {

  const { winner, handleReset, handelNextRound } = useContext(GameContext)

  return (
    <div className='score'>

      {winner && winner !== "no" ? (
        <>
          <p>you win!</p>

          <h3 className={`score__title ${winner === "o" ? 'text-yellow' : 'text-blue'}`}>
            {winner === 'x' ? <Xicon /> : <Oicon />}
            Takes the round {" "}
          </h3>

        </>
      ) : ( 
        <h3 className='score__title text-yellow'>No Winner</h3>
      )}

      {/* score__btn */}
      <div className='score__btns'>
        <button className='btn btn-sm ' onClick={handleReset}>Quit</button>
        <button className='btn btn-sm btn-yellow' onClick={handelNextRound}>Next Round</button>
      </div>
      {/* === score__btn === */}

    </div>

  )
}

export default Win
