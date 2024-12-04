import { URLs } from '@/constanst'
import { CarModel } from '../interface'

export async function fetchCarModels(
  makeId: string,
  year: string,
): Promise<CarModel[]> {
  try {
    const response = await fetch(
      URLs.MODELS_URL + `/${makeId}/modelyear/${year}?format=json`,
    )
    if (!response.ok) {
      throw new Error('Failed to fetch car models')
    }
    const data = await response.json()
    return data.Results || []
  } catch (error) {
    console.error('Error fetching car models:', error)
    throw error
  }
}
