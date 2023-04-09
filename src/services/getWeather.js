import { formatWeatherData } from '../utils/weather'

const API_KEY = 'bc27fe4abd9cb11b72f7c20202f00df1'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

async function getWeather(reqType, searchParams) {
  const url = new URL(`${BASE_URL}/${reqType}`) // URL API
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }) // Add new params and the key to the search att

  const res = await fetch(url)
  if (!res.ok) return 'Algo pasó, Daniel revisa' // **TODO: REVISAR ERRORES.

  const data = await res.json()
  return data
}

export async function getFormattedWeather(searchParams) {
  const { q, units, lat, lon, firstRender } = searchParams
  if (!q) return
  if (firstRender) {
    const currentData = await getWeather('weather', { q, units: 'metric' })
    const forecastData = await getWeather('onecall', {
      lat,
      lon,
      exclude: 'minutely,alerts'
      // lang: 'sp',
    })

    const formattedWeatherData = formatWeatherData({
      currentData,
      forecastData
    })
    return { ...formattedWeatherData }
  }

  const currentData = await getWeather('weather', { q, units })
  // if (!currentData) return

  const { coord } = currentData
  console.log(currentData)

  const forecastData = await getWeather('onecall', {
    lat: coord.lat,
    lon: coord.lon,
    exclude: 'minutely,alerts',
    units
    // lang: 'sp',
  })
  console.log(forecastData)
  const formattedWeatherData = formatWeatherData({ currentData, forecastData })
  return formattedWeatherData
}
