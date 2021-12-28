import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

import { InputChange, FormSubmit } from '@/interfaces/htmlEvents'
import { buildDuckSearchUrl } from '@/utils/duckduckgo'
import styles from '@/styles/Left.module.css'

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange: InputChange = event => {
    setSearch(event.target.value)
  }

  const handleSearch: FormSubmit = event => {
    event.preventDefault()

    window.open(buildDuckSearchUrl(search), '_blank')

    setSearch('')
  }

  return (
    <div className={styles.search_container}>
      <label htmlFor="search_input" className={styles.search_icon_wrapper}>
        <FiSearch size={36} />
      </label>

      <form className={styles.search_form} onSubmit={handleSearch}>
        <input
          className={styles.search_input}
          onChange={handleSearchChange}
          value={search}
          id="search_input"
          placeholder="Search the internet"
          type="text"
          required
        />
      </form>
    </div>
  )
}

export default SearchBar
