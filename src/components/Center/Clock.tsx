import { useState, useEffect, useContext } from 'react'

import { ONE_SECOND, getTime } from '@/utils/time'
import { LocaleCtx } from '@/contexts/Locale'
import styles from '@/styles/Center.module.css'

export const Clock = () => {
  const { locale } = useContext(LocaleCtx)

  const [time, setTime] = useState(getTime(locale))

  useEffect(() => {
    const refreshClock = () => {
      setTime(getTime(locale))
    }

    const clockId = setInterval(refreshClock, ONE_SECOND)

    const cleanup = () => {
      clearInterval(clockId)
    }
    return cleanup
  }, [locale])

  return <h2 className={styles.clock}>{time}</h2>
}

export default Clock
