import { NameProvider } from '@/contexts/Name'

import Main from '@/components/Main'
import Title from '@/components/Head/Title'
import Left from '@/components/Left'
import Center from '@/components/Center'
import Right from '@/components/Right'

const App = () => {
  return (
    <NameProvider>
      <Title />

      <Main>
        <Left />

        <Center />

        <Right />
      </Main>
    </NameProvider>
  )
}

export default App
