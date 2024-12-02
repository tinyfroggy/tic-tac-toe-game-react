import React, { useContext } from 'react';
import Win from './Win';
import Restart from './Restart';
import { ModalContext } from '../../context/ModalContext';

const Modal = () => {
  const { show, modalMode } = useContext(ModalContext); 

  return (
    <>
      {show && (
        <div>
          {/* // modal */}
          <div className='modal'>

            {/* modal__content */}
            <div className='modal__content'>

              {/* container */}
              <div className='container'>

                {modalMode === 'winner' && <Win />}
                {modalMode === 'start' && <Restart />}

              </div>
              {/* === container === */}

            </div>
            {/* === modal__content === */}

          </div>
          {/* // === modal === */}
        </div>
      )}

    </>
  );
};

export default Modal;
