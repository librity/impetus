import React, { useState } from 'react'
import { FiClock } from 'react-icons/fi'

import FULL_LOCALES from '@/data/fullLocales'
import { InputChange } from '@/interfaces/htmlEvents'
import Locale from './Locale'
import styles from '@/styles/Left.module.css'

const LocaleFilter = () => {
  const [foundLocales, setFoundLocales] = useState(FULL_LOCALES)

  const filterLocales: InputChange = e => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = FULL_LOCALES.filter(locale => {
        const search = keyword.toLowerCase()
        const searchResult = locale.name.toLowerCase().indexOf(search)

        return searchResult !== -1
      })

      setFoundLocales(results)
      return
    }

    setFoundLocales(FULL_LOCALES)
  }

  return (
    <div className={styles.locale_container}>
      <div className={styles.locale_filter}>
        <div className={styles.locale_list}>
          {foundLocales &&
            foundLocales.length > 0 &&
            foundLocales.map(locale => (
              <Locale key={locale.id} locale={locale} />
            ))}
        </div>

        <input
          onChange={filterLocales}
          className={styles.locale_input}
          id="local_input"
          placeholder="Select your locale"
        />
      </div>

      <label htmlFor="local_input" className={styles.local_icon_wrapper}>
        <FiClock size={36} />
      </label>
    </div>
  )
}

export default LocaleFilter
