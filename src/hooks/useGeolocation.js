import { useEffect, useState } from 'react'
import { getGeolocation } from '../services/getGeolocation'
import { getFormattedWeather } from '../services/getWeather'

export const useGeolocation = () => {
  const [initialWeather, setInitialWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getWeatherData = async ({ city, lat, lon }) => {
    const weatherData = await getFormattedWeather({
      q: city,
      lat,
      lon
    })
    setInitialWeather(weatherData)
  }

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const initialData = await getGeolocation()
      getWeatherData(initialData)
    })()
    setIsLoading(false)
  }, [])

  return { initialWeather, isLoading }
}
