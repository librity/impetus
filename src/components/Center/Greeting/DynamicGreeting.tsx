import { useState, useEffect, useContext } from 'react'

import { NameCtx } from '@/contexts/Name'
import { getHours, ONE_SECOND } from '@/utils/time'
import styles from '@/styles/Center.module.css'

export const DynamicGreeting = () => {
  const { name } = useContext(NameCtx)

  const [hours, setHours] = useState(getHours())

  const refreshGreeting = () => {
    setHours(getHours())
  }

  useEffect(() => {
    const greetingId = setInterval(refreshGreeting, ONE_SECOND)

    const cleanup = () => {
      clearInterval(greetingId)
    }
    return cleanup
  }, [])

  if (!name) return <h1 className={styles.greeting}>Hello!</h1>

  if (hours >= 6 && hours < 12)
    return <h1 className={styles.greeting}>Good morning, {name}.</h1>
  if (hours >= 12 && hours < 18)
    return <h1 className={styles.greeting}>Good afternoon, {name}.</h1>
  if (hours >= 18 || hours < 6)
    return <h1 className={styles.greeting}>Good night, {name}.</h1>

  return <h1 className={styles.greeting}>Hello!</h1>
}

export default DynamicGreeting
