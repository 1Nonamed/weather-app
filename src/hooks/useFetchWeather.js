import { useEffect, useState } from 'react';
import { getWeather } from '../helpers/getWeather';

export const useFetchWeather = (city) => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getWeatherData = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setIsLoading(false);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return { weather, isLoading };
};
