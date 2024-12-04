'use client'
import { useEffect, useState } from 'react'
import { CarBrand } from '../interface'
import { URLs } from '@/constanst'

export const useCarBrands = () => {
  const [brands, setBrands] = useState<CarBrand[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchCarBrands = async () => {
      if (!URLs.BASE_URL) {
        throw new Error('API URL is not defined')
      }
      try {
        setIsLoading(true)
        const response = await fetch(URLs.BASE_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch car brands')
        }

        const data = await response.json()
        setBrands(data.Results as CarBrand[])
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred'),
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchCarBrands()
  }, [])

  return { brands, isLoading, error }
}
