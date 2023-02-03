import { fromUnixTime } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

const API_KEY = 'bc27fe4abd9cb11b72f7c20202f00df1'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

async function getWeather(reqType, searchParams) {
  const url = new URL(`${BASE_URL}/${reqType}`) // URL API
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }) // Add new params and the key to the search att

  const res = await fetch(url)
  if (!res.ok) return

  const data = await res.json()
  return data
}

const generateIconUrl = (iconId) => {
  return `http://openweathermap.org/img/wn/${iconId}@2x.png`
}

const $ = (date, tz, format) => {
  return formatInTimeZone(fromUnixTime(date), tz, format)
}

function formatCurrentObj(currentObj, tz, dt) {
  const {
    main: { temp, feels_like: feelsLike, temp_max: tempMax, temp_min: tempMin },
    name,
    sys: { country, sunrise, sunset },
    weather,
    wind_speed: windSpeed
  } = currentObj
  const { main: description, icon } = weather[0]

  return {
    country,
    description,
    dt: $(dt, tz, 'MMM d, h:m aaa'),
    feelsLike,
    icon: generateIconUrl(icon),
    name,
    windSpeed,
    sunrise: $(sunrise, tz, 'h:m aaa'),
    sunset: $(sunset, tz, 'h:m aaa'),
    tempMax,
    tempMin,
    temp
  }
}

function formatForecastArrProp(forecastArr, tz, format) {
  const formattedArr = forecastArr.slice(1, 6).map((d) => {
    return {
      date: $(d.dt, tz, format),
      feels_like: d.feels_like.day || d.feels_like,
      temp: d.temp,
      icon: generateIconUrl(d.weather[0].icon),
      description: d.weather[0].description
    }
  })
  return formattedArr
}

function formatWeatherData({ forecastData, currentData }) {
  let { current, daily, hourly, timezone: tz } = forecastData
  const { dt } = current

  current = formatCurrentObj(currentData, tz, dt)
  daily = formatForecastArrProp(daily, tz, 'E')
  hourly = formatForecastArrProp(hourly, tz, 'hh:mm aaa')

  return { current, daily, hourly }
}

export async function getFormattedWeather(searchParams) {
  const { q, units = 'metric', lat, lon } = searchParams
  if (lat && lon) {
    const currentData = await getWeather('weather', { q, units })
    const forecastData = await getWeather('onecall', {
      lat,
      lon,
      exclude: 'minutely,alerts'
      // lang: 'sp',
    })

    const formattedWeatherData = formatWeatherData({
      forecastData,
      currentData
    })
    return formattedWeatherData
  }
  // if (!q) return

  // const currentData = await getWeather('weather', { q, units })

  // if (!currentData) return

  // const {
  //   coord: { lati, long }
  // } = currentData

  // const forecastData = await getWeather('onecall', {
  //   lati,
  //   long,
  //   exclude: 'minutely,alerts',
  //   units
  //   // lang: 'sp',
  // })

  // const formattedWeatherData = formatWeatherData(forecastData, currentData)
  // return {
  //   ...formattedWeatherData
  // }
}
