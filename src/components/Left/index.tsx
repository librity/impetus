import Image from 'next/image'

import searchIcon from '@/public/icons/search_icon.png'

import styles from '@/styles/Left.module.css'

export const Left = () => {
  return (
    <section className={styles.left}>
      <div className={styles.search_container}>
        <label htmlFor="search_input">
          <span className={styles.search_icon_wrapper}>
            <Image
              src={searchIcon}
              alt="Search the internet"
              width={'32px'}
              height={'32px'}
            />
          </span>
        </label>

        <form className={styles.search_form} id="search_form">
          <input
            className={styles.search_input}
            id="search_input"
            placeholder="Search the internet"
            type="text"
            required
          />
        </form>
      </div>
    </section>
  )
}

export default Left
