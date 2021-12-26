import { useContext } from 'react'

import { TasksCtx } from '@/contexts/Tasks'
import styles from '@/styles/Center.module.css'

interface TaskProps {
  task: string
}

export const Task = ({ task }: TaskProps) => {
  const { removeTask } = useContext(TasksCtx)

  const handleRemoveTask = () => {
    removeTask(task)
  }

  return (
    <li className={styles.task}>
      <button className={styles.delete_task} onClick={handleRemoveTask}>
        ❌
      </button>
      <span>{task}</span>
    </li>
  )
}

export default Task
