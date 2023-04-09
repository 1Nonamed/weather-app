import { fromUnixTime } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

// import weatherResults from '../mocks/openWeatherAPIOneCall.json'
// import initialWeatherResults from '../mocks/openWeatherAPI.json'

const generateIconUrl = (iconId) => {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`
}

const $ = (date, tz, format) => {
  return formatInTimeZone(fromUnixTime(date), tz, format)
}

function formatCurrentObj({ currentData, tz }) {
  const { dt, name, main, sys, weather } = currentData
  const {
    feels_like: feelsLike,
    temp
    // temp_max: tempMax,
    // temp_min: tempMin
  } = main
  const { country, sunrise, sunset } = sys

  return {
    name,
    country,
    sunrise: $(sunrise, tz, 'hh:mm'),
    sunset: $(sunset, tz, 'hh:mm'),
    temp,
    feelsLike,
    dt: $(dt, tz, 'MMM dd - hh:mm'),
    icon: generateIconUrl(weather[0]?.icon),
    condition: weather[0]?.description
  }
}

function formatForecastArray({ arr, tz, isDaily }) {
  const format = isDaily ? 'E' : 'hh:mm'
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

export function formatWeatherData({ currentData, forecastData }) {
  let { current, daily, hourly, timezone: tz } = forecastData
  current = formatCurrentObj({
    currentData: { ...currentData, dt: current?.dt },
    tz
  })
  daily = formatForecastArray({ isDaily: true, arr: daily, tz })
  hourly = formatForecastArray({ isDaily: false, arr: hourly, tz })

  return { current, daily, hourly }
}

// For Mocks Only
// export function weatherData() {
//   const initialWeather = initialWeatherResults
//   const onecallWeather = weatherResults

//   const formattedWeatherData = formatData({ initialWeather, onecallWeather })
//   return formattedWeatherData
// }
