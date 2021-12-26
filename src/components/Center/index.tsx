import Clock from './Clock'
import Quote from './Quote'

import styles from '@/styles/Center.module.css'

export const Center = () => {
  return (
    <section className={styles.center}>
      <div className={styles.center_anchor}></div>

      <div className={styles.clock_greeting}>
        <Clock />

        <form className={styles.hidden}>
          <input
            className={styles.center_input}
            placeholder="What's your name?"
            type="text"
            required
            maxLength={15}
          />
        </form>

        <h1 className={styles.greeting}></h1>
      </div>

      <div className={styles.todo_quote}>
        <div className={styles.todo_container}>
          <form className={styles.todo}>
            <input
              className={styles.center_input}
              type="text"
              placeholder="Type a task here"
              required
            />
          </form>

          <ul className={styles.todo_list}></ul>
        </div>

        <Quote />
      </div>
    </section>
  )
}

export default Center
