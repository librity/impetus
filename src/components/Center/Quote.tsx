import { useEffect, useState } from 'react'
import BarLoader from 'react-spinners/BarLoader'

import { fetchRandomQuote } from '@/api/quotes'
import { QuoteI } from '@/interfaces/quote'
import styles from '@/styles/Center.module.css'

export const Quote = () => {
  const [quote, setQuote] = useState<QuoteI>()

  useEffect(() => {
    const getQuote = async () => {
      const randomQuote = await fetchRandomQuote()

      setQuote(randomQuote)
    }

    getQuote()
  }, [])

  if (!quote)
    return (
      <div className={styles.quote}>
        <BarLoader color="#FFFFFF" />
      </div>
    )

  return (
    <div className={styles.quote}>
      <div>
        &#34;{quote.content}&#34; <br /> {quote.author}
      </div>
    </div>
  )
}

export default Quote
