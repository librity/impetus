import { createContext, useState, useEffect } from 'react'

interface NameCtxData {
  name: string | undefined
  setName: (data: string) => void
}

export const NameCtx = createContext({} as NameCtxData)

export const NameProvider = ({ children, ...rest }) => {
  const [name, setName] = useState<string | undefined>()

  return (
    <NameCtx.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </NameCtx.Provider>
  )
}
