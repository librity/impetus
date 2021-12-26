const DUCKDUCKGO_BASE_URL = 'https://duckduckgo.com/?q='

export const buildDuckSearchUrl = (search: string) => {
  return DUCKDUCKGO_BASE_URL + search
}
