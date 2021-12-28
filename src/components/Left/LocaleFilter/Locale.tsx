import { useContext } from 'react'

import FullLocale from '@/interfaces/FullLocale'
import { LocaleCtx } from '@/contexts/Locale'
import styles from '@/styles/Left.module.css'

interface LocaleProps {
  locale: FullLocale
}

export const Locale = ({ locale }: LocaleProps) => {
  const { chooseLocale } = useContext(LocaleCtx)

  const handleLocaleChange = () => {
    chooseLocale(locale.code)
  }

  return (
    <button className={styles.locale_button} onClick={handleLocaleChange}>
      {locale.name}
    </button>
  )
}

export default Locale
