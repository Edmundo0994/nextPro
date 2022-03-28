import { useState, createContext, useContext } from 'react'

const AlertContext = createContext()

export function ProviderAlert({ children }) {
  const alert = useProviderAlert()
  return <AlertContext.Provider value={alert}>{children}</AlertContext.Provider>
}

export const useAlert = () => {
  return useContext(AlertContext)
}

const useProviderAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  }
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  })

  const toggleAlert = () => {
    setAlert(!alert.active)
  }

  return {
    alert,
    setAlert,
    toggleAlert,
  }
}
