import { createContext } from 'react'
import createPersistedState from 'use-persisted-state'

const NAME_KEY = 'name'
const useNameState = createPersistedState(NAME_KEY)

interface NameCtxData {
  name: string | null
  saveName: (newName: string) => void
}

export const NameCtx = createContext({} as NameCtxData)

export const NameProvider: React.FC<{}> = ({ children, ..._rest }) => {
  const [name, setName] = useNameState<string | null>(null)

  const saveName = (newName: string) => {
    setName(newName)
  }

  return (
    <NameCtx.Provider value={{ name, saveName }}>{children}</NameCtx.Provider>
  )
}
