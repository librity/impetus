import { createContext } from 'react'
import createPersistedState from 'use-persisted-state'

import LOCALES from '@/data/locales'

const DEFAULT_LOCALE = 'pt-BR'

const LOCALE_KEY = 'Locale'
const useLocaleState = createPersistedState(LOCALE_KEY)

interface LocaleCtxData {
  locale: string
  chooseLocale: (targetLocale: string) => void
  resetLocale: () => void
}

export const LocaleCtx = createContext({} as LocaleCtxData)

export const LocaleProvider: React.FC<{}> = ({ children, ..._rest }) => {
  const [locale, setLocale] = useLocaleState(DEFAULT_LOCALE)

  const chooseLocale = (targetLocale: string) => {
    const isValid = LOCALES.find(loc => loc === targetLocale)
    if (!isValid) return

    setLocale(targetLocale)
  }

  const resetLocale = () => {
    setLocale(DEFAULT_LOCALE)
  }

  return (
    <LocaleCtx.Provider
      value={{
        locale,
        chooseLocale,
        resetLocale,
      }}
    >
      {children}
    </LocaleCtx.Provider>
  )
}
