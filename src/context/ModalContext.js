import { createContext } from "react"
import { useState } from "react"

const ModalContext = createContext()

const ModalState = ({children}) => {

  const [show , setShow] = useState(false);
  const [mode , setMode] = useState('winner');

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return(
    <ModalContext.Provider value={{show, showModal, hideModal ,
      modalMode: mode ,
      setModalMode: setMode}}>
      {children}
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalState}