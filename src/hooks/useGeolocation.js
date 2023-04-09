import { useEffect, useState } from 'react'
import { getGeolocation } from '../services/getGeolocation'
import { getFormattedWeather } from '../services/getWeather'

export const useGeolocation = () => {
  const [initialWeather, setInitialWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getFirstRenderGeolocationData = async () => {
    const initialData = await getGeolocation()
    getFirstRenderWeatherData(initialData)
  }

  const getFirstRenderWeatherData = async ({ city, lat, lon }) => {
    const weatherData = await getFormattedWeather({
      q: city,
      lat,
      lon,
      firstRender: true
    })
    setInitialWeather(weatherData)
  }

  useEffect(() => {
    getFirstRenderGeolocationData()
    setIsLoading(false)
  }, [])

  return { initialWeather, isLoading }
}
