import { useEffect, useState } from 'react'
import { getFormattedWeather } from '../services/getWeather'

export const useWeather = (initialWeather) => {
  console.log(initialWeather)
  const [city, setCity] = useState()
  const [weather, setWeather] = useState(initialWeather)
  const [units, setUnits] = useState('metric')
  const [isLoading, setIsLoading] = useState(false)
  // const [isError, setIsError] = useState(false)

  const searchCity = (newCity) => setCity(newCity)
  const changeMetricSystem = (newUnits) => setUnits(newUnits)

  const getWeatherData = async () => {
    setIsLoading(true)
    const weatherData = await getFormattedWeather({
      q: city,
      units
    })
    // if (!weatherData) return setIsError(true)

    setWeather(weatherData)
    setIsLoading(false)
    console.log(weatherData)
  }

  // useEffect(() => {
  //   setWeather(initialWeather)
  //   setIsLoading(false)
  //   console.log('weather', weather)
  // }, [])

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
