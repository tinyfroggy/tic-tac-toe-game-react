import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext';
import { ModalContext } from '../../context/ModalContext';

const Restart = () => {

  const { handleReset } = useContext(GameContext);

  const { hideModal } = useContext(ModalContext)

  return (
    <div className='restart'>

      <h3 className='restart__title'>Restart game?</h3>

      {/* restart__btns */}
      <div className='restart__btns'>

        <button className='btn btn-sm' onClick={hideModal}>No, canal</button>
        <button className='btn btn-sm btn-yellow' onClick={handleReset}>Yes, restart</button>

      </div>
      {/* === restart__btns === */}

    </div>
  )
}

export default Restart
