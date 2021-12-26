import { NameProvider } from '@/contexts/Name'

import Title from '@/components/Head/Title'
import Left from '@/components/Left'
import Center from '@/components/Center'
import Right from '@/components/Right'

import styles from '../styles/App.module.css'

const App = () => {
  return (
    <NameProvider>
      <Title />

      <main className={styles.main}>
        <Left />

        <Center />

        <Right />
      </main>
    </NameProvider>
  )
}

export default App
