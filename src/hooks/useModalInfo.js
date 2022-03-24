import { useState } from 'react'

const useModalInfo = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: 0,
  }

  const [modalInfo, setModalInfo] = useState({
    ...defaultOptions,
    ...options,
  })

  const toggleModalInfo = () => {
    setModalInfo(!modalInfo.active)
  }

  return {
    modalInfo,
    setModalInfo,
    toggleModalInfo,
  }
}

export default useModalInfo
