import styles from '@/styles/Right.module.css'

const Right = () => {
  return (
    <section className={styles.right}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.weather_container}
        id="weather_container"
      >
        <img src="" alt="" id="weather_icon" />

        <div className={styles.weather_details}>
          <span id="weather_temp"></span>
          <span id="weather_city"></span>
        </div>
      </a>
    </section>
  )
}

export default Right
