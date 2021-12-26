import Clock from './Clock'
import Greeting from './Greeting'
import Quote from './Quote'

import styles from '@/styles/Center.module.css'

export const Center = () => {
  return (
    <section className={styles.center}>
      <div className={styles.center_anchor}></div>

      <div className={styles.clock_greeting}>
        <Clock />

        <Greeting />
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
