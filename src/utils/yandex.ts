const YANDEX_BASE_URL = 'https://yandex.com/search/?text='

export const buildYandexSearchUrl = (search: string) => {
  return YANDEX_BASE_URL + search
}
