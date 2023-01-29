import { useEffect, useState } from 'react'
import { getGeolocation } from '../services/getGeolocation'

export const useGeolocation = () => {
  const [location, setLocation] = useState('')

  useEffect(() => {
    getGeolocation().then(setLocation)
  }, [])
  return { location }
}
