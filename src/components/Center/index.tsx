import Clock from './Clock'
import Greeting from './Greeting'
import Todo from './Todo'
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
        <Todo />

        <Quote />
      </div>
    </section>
  )
}

export default Center
