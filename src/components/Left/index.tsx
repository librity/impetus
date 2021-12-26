import SearchBar from './SearchBar'

import styles from '@/styles/Left.module.css'

export const Left = () => {
  return (
    <section className={styles.left}>
      <SearchBar />
    </section>
  )
}

export default Left
