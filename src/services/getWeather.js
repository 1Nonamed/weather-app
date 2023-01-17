import {
  format,
  formatInTimeZone,
  utcToZonedTime,
  zonedTimeToUtc,
} from 'date-fns-tz';

const API_KEY = 'bc27fe4abd9cb11b72f7c20202f00df1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeather = async (reqType, searchParams) => {
  const url = new URL(`${BASE_URL}/${reqType}`); // URL API
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY }); // Add new params and the key to the search att

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const formatCurrentWeather = (data) => {
  console.log(data);
  const {
    coord: { lon, lat },
    dt,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: description, icon } = weather[0];

  return {
    country,
    description,
    dt,
    feels_like,
    humidity,
    icon,
    lat,
    lon,
    name,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    temp,
  };
};
const formatForecastWeather = (data) => {
  let { daily, hourly, timezone } = data;
  console.log(daily, timezone);
  daily = daily.slice(1, 6).map((d) => {
    const zonedDate = utcToZonedTime(d.dt, timezone);
    return {
      date: format(zonedDate, 'yyyy-MM-dd HH:mm:ss zzz', timezone),
      feels_like: d.feels_like,
      temp: d.temp,
      icon: d.weather[0].icon,
      description: d.weather[0].description,
    };
  });

  hourly = hourly.slice(1, 6).map((h) => {
    const zonedDate = utcToZonedTime(h.dt, timezone);
    return {
      date: format(zonedDate, 'yyyy-MM-dd HH:mm:ss zzz', timezone),
      feels_like: h.feels_like,
      temp: h.temp,
      icon: h.weather[0].icon,
      description: h.weather[0].description,
    };
  });
  console.log(daily);
  return { daily, hourly, timezone };
};

export const getFormattedCurrentWeather = async (searchParams) => {
  const { q } = searchParams;
  if (!q) return;

  const currentData = await getWeather('weather', { q, units: 'metric' });
  const formattedCurrentWeather = formatCurrentWeather(currentData);
  const { lat, lon } = formattedCurrentWeather;

  const forecastData = await getWeather('onecall', {
    lat,
    lon,
    exclude: 'current,minutely',
    units: 'metric',
  });
  const formattedForecastWeather = formatForecastWeather(forecastData);

  return {
    current: { ...formattedCurrentWeather },
    ...formattedForecastWeather,
  };
};
