import { useContext, useState } from 'react'

import { TasksCtx } from '@/contexts/Tasks'
import { InputChange, FormSubmit } from '@/interfaces/htmlEvents'
import Task from './Task'
import styles from '@/styles/Center.module.css'

export const Tasks = () => {
  const { tasks, addTask } = useContext(TasksCtx)

  const [newTask, setNewTask] = useState('')

  const handleTaskChange: InputChange = event => {
    setNewTask(event.target.value)
  }

  const handleAddTask: FormSubmit = event => {
    event.preventDefault()

    addTask(newTask)
    setNewTask('')
  }

  return (
    <div className={styles.todo_container}>
      <form className={styles.todo} onSubmit={handleAddTask}>
        <input
          className={styles.center_input}
          onChange={handleTaskChange}
          value={newTask}
          type="text"
          placeholder="Type a task here"
          required
        />
      </form>

      <ul className={styles.todo_list}>
        {tasks && tasks.map((task: string) => <Task key={task} task={task} />)}
      </ul>
    </div>
  )
}

export default Tasks
