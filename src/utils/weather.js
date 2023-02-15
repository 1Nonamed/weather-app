import { fromUnixTime } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

import weatherResults from '../mocks/openWeatherAPIOneCall.json'
import initialWeatherResults from '../mocks/openWeatherAPI.json'

const generateIconUrl = (iconId) => {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`
}

const $ = (date, tz, format) => {
  return formatInTimeZone(fromUnixTime(date), tz, format)
}

function formatCurrentObj({ currentData, tz }) {
  const { dt, name, main, sys, weather } = currentData
  const { feels_like: feelsLike, temp } = main
  const { country, sunrise, sunset } = sys

  return {
    name,
    country,
    sunrise: $(sunrise, tz, 'dd hh:mm aaa'),
    sunset: $(sunset, tz, 'dd hh:mm aaa'),
    temp,
    feelsLike,
    dt: $(dt, tz, 'dd hh:mm aaa'),
    icon: generateIconUrl(weather[0]?.icon),
    condition: weather[0]?.description
  }
}

function formatForecastArray({ arr, tz, daily }) {
  const format = daily ? 'dd E' : 'dd hh:mm aaa'
  const formattedArray = arr.slice(1, 6).map((el) => {
    return {
      condition: el.weather[0]?.description,
      date: $(el.dt, tz, format),
      feelsLike: el.feels_like.day || el.feels_like,
      icon: generateIconUrl(el.weather[0]?.icon),
      temp: el.temp.day || el.temp
    }
  })
  return formattedArray
}

function formatData({ initialWeather, onecallWeather }) {
  let { current, daily, hourly, timezone: tz } = onecallWeather
  current = formatCurrentObj({
    currentData: { ...initialWeather, dt: current?.dt },
    tz
  })
  daily = formatForecastArray({ daily: true, arr: daily, tz })
  hourly = formatForecastArray({ daily: false, arr: hourly, tz })

  return { current, daily, hourly }
}

export function weatherData() {
  const initialWeather = initialWeatherResults
  const onecallWeather = weatherResults

  const formattedWeatherData = formatData({ initialWeather, onecallWeather })
  return formattedWeatherData
}
