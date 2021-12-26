import { TasksProvider } from '@/contexts/Tasks'
import Tasks from './Tasks'

export const Todo = () => {
  return (
    <TasksProvider>
      <Tasks />
    </TasksProvider>
  )
}

export default Todo
