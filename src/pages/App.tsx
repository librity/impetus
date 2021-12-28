import GlobalProviders from '@/contexts/GlobalProviders'

import Main from '@/components/Main'
import Title from '@/components/Head/Title'
import Left from '@/components/Left'
import Center from '@/components/Center'
import Right from '@/components/Right'

const App = () => {
  return (
    <GlobalProviders>
      <Title />

      <Main>
        <Left />

        <Center />

        <Right />
      </Main>
    </GlobalProviders>
  )
}

export default App
