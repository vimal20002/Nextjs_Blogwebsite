'use client'
import { useState } from "react"
import { LoginContext, UidContext } from "./globalContext"

const Provider = ({children}) => {
    const [isLogedIn, setIsLoggedIn] = useState(false)
    const [uid, setUid]  = useState('')
    
  return (
    <LoginContext.Provider value = {{isLogedIn, setIsLoggedIn}}>
      <UidContext.Provider value={{uid, setUid}}>
        {children}
      </UidContext.Provider>
    </LoginContext.Provider>
  )
}

export default Provider