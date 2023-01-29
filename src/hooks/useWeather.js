import { useEffect, useState } from 'react'
import { getFormattedWeather } from '../services/getWeather'

export const useWeather = ({ location = 'bogota' }) => {
  const [city, setCity] = useState()
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const searchCity = (newCity) => setCity(newCity)
  const changeMetricSystem = (newUnits) => setUnits(newUnits)

  const getWeatherData = async () => {
    const weatherData = await getFormattedWeather({
      q: city,
      units
    })
    console.log(weatherData)
    if (!weatherData) return setIsError(true)

    setWeather(weatherData)
    setIsLoading(false)
    setIsError(false)
  }

  useEffect(() => {
    if (!city) return
    getWeatherData()
  }, [city, units])

  return {
    city,
    units,
    weather,
    isLoading,
    searchCity,
    changeMetricSystem,
    isError
  }
}
