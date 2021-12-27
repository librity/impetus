export const ONE_SECOND = 1000
export const TEN_MINUTES = 10 * 60 * 1000
export const ONE_HOUR = 60 * 60 * 1000

const TFHOUR_LOCALE = 'fr-FR'

export const getTime = () => {
  return new Date().toLocaleTimeString(TFHOUR_LOCALE)
}

export const getHours = () => {
  return new Date().getHours()
}
