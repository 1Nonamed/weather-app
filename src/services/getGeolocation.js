const API_KEY = '28700f52b8244718bc0cb36396126bff'

export function getGeolocation() {
  return fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`)
    .then((res) => res.json())
    .then(({ city }) => {
      return city
    })
}
