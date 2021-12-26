import { useState, useEffect } from 'react'

import styles from '@/styles/Center.module.css'

import { getTime, ONE_SECOND } from '@/utils/time'

export const Clock = () => {
  const [time, setTime] = useState(getTime())

  const refreshClock = () => {
    setTime(getTime())
  }

  useEffect(() => {
    const clockId = setInterval(refreshClock, ONE_SECOND)

    const cleanup = () => {
      clearInterval(clockId)
    }
    return cleanup
  }, [])

  return <h2 className={styles.clock}>{time}</h2>
}

export default Clock
