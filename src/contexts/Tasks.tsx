import { createContext } from 'react'
import createPersistedState from 'use-persisted-state'

const TASKS_KEY = 'tasks'
const useTasksState = createPersistedState(TASKS_KEY)

interface TasksCtxData {
  tasks: string[]
  addTask: (newTask: string) => void
  removeTask: (targetTask: string) => void
}

export const TasksCtx = createContext({} as TasksCtxData)

export const TasksProvider: React.FC<{}> = ({ children, ..._rest }) => {
  const [tasks, setTasks] = useTasksState([] as string[])

  const addTask = (newTask: string) => {
    setTasks(oldTasks => [...oldTasks, newTask])
  }

  const removeTask = (targetTask: string) => {
    setTasks(oldTasks => oldTasks.filter(task => task !== targetTask))
  }

  return (
    <TasksCtx.Provider
      value={{
        tasks,
        addTask,
        removeTask,
      }}
    >
      {children}
    </TasksCtx.Provider>
  )
}
