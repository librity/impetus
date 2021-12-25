import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Left from '@/components/Left'
import Center from '@/components/Center'
import Right from '@/components/Right'

const App = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Impetus</title>
      </Head>

      <main className={styles.main}>
        <Left />

        <Center />

        <Right />
      </main>
    </div>
  )
}

export default App
