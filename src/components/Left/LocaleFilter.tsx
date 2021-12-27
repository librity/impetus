import React, { useState } from 'react'

import { NAMED_LOCALES } from '@/utils/locales'
import { InputChange } from '@/interfaces/htmlEvents'
import styles from '@/styles/Left.module.css'

function LocaleFilter() {
  const [search, setSearch] = useState('')
  const [foundLocales, setFoundLocales] = useState(NAMED_LOCALES)

  const filterLocales: InputChange = e => {
    const keyword = e.target.value

    if (keyword !== '') {
      const results = NAMED_LOCALES.filter(locale => {
        const search = keyword.toLowerCase()
        const searchResult = locale.name.toLowerCase().indexOf(search)

        return searchResult !== -1
      })

      setFoundLocales(results)
      setSearch(keyword)
      return
    }

    setFoundLocales(NAMED_LOCALES)
    setSearch(keyword)
  }

  return (
    <div className={styles.locale_container}>
      <div className={styles.locale_list}>
        {foundLocales && foundLocales.length > 0 ? (
          foundLocales.map(locale => (
            <button key={locale.id} className={styles.locale_button}>
              {locale.name}
            </button>
          ))
        ) : (
          <p>No results found!</p>
        )}
      </div>

      <input
        onChange={filterLocales}
        value={search}
        className={styles.locale_input}
        placeholder="Select your locale"
      />
    </div>
  )
}

export default LocaleFilter