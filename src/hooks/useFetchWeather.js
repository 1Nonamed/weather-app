import { useEffect, useState } from 'react';
import { getFormattedCurrentWeather } from '../services/getWeather';

export const useFetchWeather = (city) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherData = async () => {
    const weatherData = await getFormattedCurrentWeather({ q: city });
    setWeather(weatherData);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeatherData();
  }, [city]);

  return { weather, isLoading };
};
