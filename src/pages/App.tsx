import Head from 'next/head'

import { NameProvider } from '@/contexts/Name'

import Left from '@/components/Left'
import Center from '@/components/Center'
import Right from '@/components/Right'

import styles from '../styles/App.module.css'

const App = () => {
  return (
    <NameProvider>
      <Head>
        <title>Impetus.</title>
      </Head>

      <main className={styles.main}>
        <Left />

        <Center />

        <Right />
      </main>
    </NameProvider>
  )
}

export default App
