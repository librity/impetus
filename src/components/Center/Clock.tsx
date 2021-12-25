import { useState, useEffect } from 'react'

import styles from '@/styles/Center.module.css'

const ONE_SECOND = 1000
const TFHOUR_LOCALE = 'fr-FR'

export const Clock = () => {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, ONE_SECOND)

    const cleanup = () => {
      clearInterval(timerId)
    }
    return cleanup
  }, [])

  return (
    <h2 className={styles.clock}>{date.toLocaleTimeString(TFHOUR_LOCALE)}</h2>
  )
}

export default Clock
