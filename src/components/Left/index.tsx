import styles from '@/styles/Left.module.css'

export const Left = () => {
  return (
    <section className={styles.left}>
      <div className={styles.search_container}>
        <label htmlFor="search_input">
          <img
            className={styles.search_icon}
            id="search_icon"
            src="/icons/search_icon.png"
            alt="Search the internet"
          />
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
