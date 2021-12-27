import Weather from './Weather'
import Github from './Github'

import styles from '@/styles/Right.module.css'

const Right = () => {
  return (
    <section className={styles.right}>
      <Weather />

      <Github />
    </section>
  )
}

export default Right
