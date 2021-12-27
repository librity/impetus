import { useEffect, useState } from 'react'

import { buildCssUrl } from '@/utils/css'
import { ONE_HOUR } from '@/utils/time'
import { UNSPLASH_URL, fetchRandomLandscape } from '@/api/unsplash'
import styles from '@/styles/App.module.css'

export const Main: React.FC<{}> = ({ children, ..._rest }) => {
  const [bgUrl, setBgUrl] = useState(buildCssUrl(UNSPLASH_URL))

  const refreshBackground = async () => {
    const url = await fetchRandomLandscape()
    if (!url) return

    setBgUrl(buildCssUrl(url))
  }

  useEffect(() => {
    const refresherId = setInterval(refreshBackground, ONE_HOUR)

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
