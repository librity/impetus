import { useState, FormEventHandler } from 'react'
import Image from 'next/image'

import searchIcon from '@/public/icons/search_icon.png'

import styles from '@/styles/Left.module.css'

import { buildDuckSearchUrl } from '@/utils/duckduckgo'

export const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch: FormEventHandler<HTMLFormElement> = e => {
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
            width={'32px'}
            height={'32px'}
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
