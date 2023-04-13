import { useEffect, useState } from 'react'
import { getGeolocation } from '../services/getGeolocation'
import { getFormattedWeather } from '../services/getWeather'

export const useGeolocation = () => {
  const [initialWeatherData, setInitialWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getInitalGeolocationData = async () => {
    const initialGeolocationData = await getGeolocation()
    getInitialWeatherData(initialGeolocationData)
  }

  const getInitialWeatherData = async (initialGeolocationData) => {
    const weatherData = await getFormattedWeather({
      ...initialGeolocationData,
      firstRender: true
    })
    setInitialWeatherData(weatherData)
  }

  useEffect(() => {
    getInitalGeolocationData()
    setIsLoading(false)
  }, [])

  return { initialWeatherData, isLoading }
}
