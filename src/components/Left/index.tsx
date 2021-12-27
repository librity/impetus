import SearchBar from './SearchBar'
import LocaleFilter from './LocaleFilter'

import styles from '@/styles/Left.module.css'

export const Left = () => {
  return (
    <section className={styles.left}>
      <SearchBar />

      <LocaleFilter />
    </section>
  )
}

export default Left
