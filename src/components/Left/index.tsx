import { FormEventHandler } from 'react'
import { useState } from 'react'

import Image from 'next/image'

import searchIcon from '@/public/icons/search_icon.png'

import styles from '@/styles/Left.module.css'

const DUCKDUCKGO_BASE_URL = 'https://duckduckgo.com/?q='

export const Left = () => {
  const [search, setSearch] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    const searchURL = DUCKDUCKGO_BASE_URL + search
    window.open(searchURL, '_blank')

    setSearch('')
  }

  return (
    <section className={styles.left}>
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
    </section>
  )
}

export default Left
