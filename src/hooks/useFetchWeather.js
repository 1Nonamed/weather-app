import { useEffect, useState } from 'react'
import { getFormattedWeather } from '../services/getWeather'

export const useFetchWeather = (city, units) => {
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getWeatherData = async () => {
    const weatherData = await getFormattedWeather({
      q: city,
      units
    })
    setWeather(weatherData)
    setIsLoading(false)
  }

  useEffect(() => {
    getWeatherData()
  }, [city, units])

  return { weather, isLoading }
}
