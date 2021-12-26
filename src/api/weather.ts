import { fetchJson } from '@/api/generic'

import { WeatherAPIRespI } from '@/interfaces/weather'

const WEATHER_API_KEY = '64b4a1917a1162ec2a04717a12f24a9a'
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const WEATHER_ICON_BASE_URL = 'https://openweathermap.org/img/wn'

export const buildDarkskyUrl = (position: GeolocationPosition) => {
  const { latitude: lat, longitude: lon } = position.coords

  return `https://darksky.net/forecast/${lat},${lon}/si24/en`
}

export const buildWeatherUrl = (position: GeolocationPosition) => {
  const { latitude: lat, longitude: lon } = position.coords

  return `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
}

export const fetchWeather = async (weatherUrl: string) => {
  try {
    const resp = await fetchJson(weatherUrl)

    return formatWeatherData(resp)
  } catch (error) {
    console.error(error)
  }
}

const formatWeatherData = (resp: WeatherAPIRespI) => {
  const formattedWeather = {
    iconUrl: buildIconUrl(resp.weather[0].icon),
    iconAlt: resp.weather[0].description,
    current: buildCurrent(resp),
    city: resp.name,
  }

  return formattedWeather
}

const buildIconUrl = (iconId: string) => {
  return `${WEATHER_ICON_BASE_URL}/${iconId}@2x.png`
}

const buildCurrent = (resp: WeatherAPIRespI) => {
  const temp = Math.floor(resp.main.temp)

  return `${resp.weather[0].main} / ${temp}°C`
}
