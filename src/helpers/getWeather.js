export const getWeather = async (city) => {
  if (!city) return;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=856194f79e3244779f113744220812&q=${city}&days=3`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
};
