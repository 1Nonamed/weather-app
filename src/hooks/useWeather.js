import { useEffect, useState } from 'react'
import { getFormattedWeather } from '../services/getWeather'
import { getGeolocation } from '../services/getGeolocation'

export const useWeather = () => {
  const [city, setCity] = useState('')

  const [weather, setWeather] = useState([])
  const [units, setUnits] = useState('metric')
  const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  const searchCity = (newCity) => setCity(newCity)
  const changeMetricSystem = (newUnits) => setUnits(newUnits)

  const getFirstRenderWeatherData = async () => {
    setIsLoading(true)
    const initialData = await getGeolocation()
    setCity(initialData.city)
    const initialWeather = await getFormattedWeather({
      ...initialData,
      units,
      firstRender: true
    })
    setWeather(initialWeather)
    setIsLoading(false)
  }

  const getWeatherData = async () => {
    setIsLoading(true)
    const weatherData = await getFormattedWeather({
      city,
      units
    })
    setWeather(weatherData)
    setIsLoading(false)
  }

  useEffect(() => {
    getFirstRenderWeatherData()
  }, [])

  useEffect(() => {
    if (!city) return

    getWeatherData()
  }, [city, units])

  return {
    city,
    // units,
    weather,
    isLoading,
    searchCity,
    changeMetricSystem
    // isError
  }
}
