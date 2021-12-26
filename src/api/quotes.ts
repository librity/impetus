import { fetchJson } from '@/api/generic'

const RANDOM_QUOTE_URL = 'https://api.quotable.io/random'

export const fetchRandomQuote = async () => {
  try {
    const { content, author } = await fetchJson(RANDOM_QUOTE_URL)

    return { content, author }
  } catch (error) {
    console.error(error)
  }
}
