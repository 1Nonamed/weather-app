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
  const {
    coord: { lon, lat },
    dt,
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: current, icon } = weather[0];

  return {
    country,
    current,
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
  console.log(data);
};

export const getFormattedCurrentWeather = async (searchParams) => {
  if (!searchParams.q) return;

  const currentData = await getWeather('weather', searchParams);
  const formattedCurrentWeather = formatCurrentWeather(currentData);

  const { lat, lon } = formattedCurrentWeather;

  const forecastData = await getWeather('onecall', {
    lat,
    lon,
    exclude: 'current,minutely',
    units: 'metric',
  });
  const formattedForecastWeather = formatForecastWeather(forecastData);

  console.log(formattedCurrentWeather);
  console.log(formattedForecastWeather);

  return formattedCurrentWeather;
};
