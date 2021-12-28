import { NameProvider } from '@/contexts/Name'
import { LocaleProvider } from '@/contexts/Locale'

const GlobalProviders: React.FC<{}> = ({ children, ..._rest }) => {
  return (
    <NameProvider>
      <LocaleProvider>{children}</LocaleProvider>
    </NameProvider>
  )
}

export default GlobalProviders
