import { useState } from 'react'
import Image from 'next/image'

import searchIcon from '@/public/icons/search_icon.png'
import { InputChangeEvent, FormSubmit } from '@/interfaces/htmlEvents'
import { buildDuckSearchUrl } from '@/utils/duckduckgo'
import styles from '@/styles/Left.module.css'

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (e: InputChangeEvent) => {
    setSearch(e.target.value)
  }

  const handleSearch: FormSubmit = e => {
    e.preventDefault()

    window.open(buildDuckSearchUrl(search), '_blank')

    setSearch('')
  }

  return (
    <div className={styles.search_container}>
      <label htmlFor="search_input">
        <span className={styles.search_icon_wrapper}>
          <Image
            src={searchIcon}
            alt="Search the internet"
            width={36}
            height={36}
          />
        </span>
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
