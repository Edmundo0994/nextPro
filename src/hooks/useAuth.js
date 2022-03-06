import React, { useState, useContext, createContext } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'

const AuthContext = createContext()

export function ProviderAuth({ children }) {
  const auth = useProviderAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProviderAuth() {
  const [user, setUser] = useState(null)

  const signIn = async (email, password) => {
    setUser('login')
  }

  return {
    user,
    signIn,
  }
}
