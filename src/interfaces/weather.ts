interface WeatherIconI {
  id: number
  main: string
  description: string
  icon: string
}

export interface WeatherAPIRespI {
  coord: {
    lon: number
    lat: number
  }
  weather: [WeatherIconI]

  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }

  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export interface FormattedWeatherI {
  iconUrl: string
  iconAlt: string
  city: string
  current: string
}
