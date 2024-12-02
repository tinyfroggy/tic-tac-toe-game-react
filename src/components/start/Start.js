import React from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

const Start = () => {

  const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);

  return (
    // start
    <div className="start">

      {/* start__header */}
      <div className='start__header'>
        <Xicon />
        <Oicon />
      </div>
      {/* === start__header === */}

      {/* card */}
      <div className="card shadow-gray">
        <h1 className='tex-lg'>Pick player 1'st mark</h1>

        {/* start__player */}
        <div className='start__players'>

          <span className={ activeUser === 'x' ? 'start__players--active' : ""} 
          onClick={() => setActiveUser('x')}>
            <Xicon color={activeUser === 'x' ? "dark" : "light"} />
          </span>

          <span className={ activeUser === 'o' ? 'start__players--active' : ""} 
          onClick={() => setActiveUser('o')}>
            <Oicon color={ activeUser === 'o' ? "dark" : "light"} />
          </span>

        </div>
        {/* === start__player === */}

        <p className='text-light'>remember: x goes first</p>

      </div>
      {/* === card === */}

      {/* button */}
      <div className="start__btns">

        <button className='btn btn-yellow' 
        onClick={ () => {changePlayMode("cpu")}}>new game (vs CPU)</button>

        <button className='btn btn-blue' 
        onClick={ () => {changePlayMode("user")}}>new game (vs Player)</button>

      </div>
      {/* === button === */}

    </div>
    // === start ===
  )
}

export default Start
