import { useEffect, useState } from 'react'
import Image from 'next/image'
import PuffLoader from 'react-spinners/PuffLoader'

import styles from '@/styles/Right.module.css'

import { TEN_MINUTES } from '@/utils/time'

import { FormattedWeather } from '@/interfaces/weather'
import { buildDarkskyUrl, buildWeatherUrl, fetchWeather } from '@/api/weather'

export const Weather = () => {
  const [weatherUrl, setWeatherUrl] = useState('')
  const [darkskyUrl, setDarkskyUrl] = useState('')

  const [weather, setWeather] = useState<FormattedWeather>()

  const updateWeather = () => {
    const intervalId = setInterval(() => getWeather(weatherUrl), TEN_MINUTES)

    const cleanup = () => {
      clearInterval(intervalId)
    }
    return cleanup
  }

  const initWeather = () => {
    const onGeoError = () => {
      alert('Please allow location access for weather forecast.')
    }

    const onGeoOK = (position: GeolocationPosition) => {
      setDarkskyUrl(buildDarkskyUrl(position))

      const wUrl = buildWeatherUrl(position)
      setWeatherUrl(wUrl)
      getWeather(wUrl)
    }

    navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
  }

  useEffect(initWeather, [])
  useEffect(updateWeather, [weatherUrl])

  const getWeather = async (wUrl: string) => {
    const formattedWeather = await fetchWeather(wUrl)

    setWeather(formattedWeather)
  }

  if (!weather)
    return (
      <div className={styles.weather_container}>
        <PuffLoader color="#FFFFFF" size={80} />
      </div>
    )

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={styles.weather_container}
      href={darkskyUrl}
    >
      <Image
        src={weather.iconUrl}
        alt={weather.iconAlt}
        width={100}
        height={100}
      />

      <div className={styles.weather_details}>
        <span>{weather.current}</span>
        <span>{weather.city}</span>
      </div>
    </a>
  )
}

export default Weather
