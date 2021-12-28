import { useEffect, useState } from 'react'

import { buildCssUrl } from '@/utils/css'
import { HALF_HOUR } from '@/utils/time'
import { getRandomUrl, fetchRandomLandscape } from '@/api/unsplash'
import styles from '@/styles/App.module.css'

export const Main: React.FC<{}> = ({ children, ..._rest }) => {
  const [bgUrl, setBgUrl] = useState(buildCssUrl(getRandomUrl()))

  const refreshBackground = async () => {
    const url = await fetchRandomLandscape()
    if (!url) return

    setBgUrl(buildCssUrl(url))
  }

  useEffect(() => {
    const refresherId = setInterval(refreshBackground, HALF_HOUR)

    const cleanup = () => {
      clearInterval(refresherId)
    }
    return cleanup
  }, [])

  return (
    <main className={styles.main} style={{ backgroundImage: bgUrl }}>
      {children}
    </main>
  )
}

export default Main
