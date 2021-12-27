export const UNSPLASH_URL =
  'https://source.unsplash.com/random/1920x1080/?landscape'

export const fetchRandomLandscape = async () => {
  try {
    const { url } = await fetch(UNSPLASH_URL)

    return url
  } catch (error) {
    console.error(error)
  }
}
