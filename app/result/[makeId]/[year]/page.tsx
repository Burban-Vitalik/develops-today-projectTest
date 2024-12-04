import { Suspense, use } from 'react'
import { ModelListSkeleton, ModelsList } from '@/components'
import { CarModel } from '@/interface'
import { fetchCarModels } from '@/service'

export async function generateMetadata({
  params,
}: {
  params: { makeId: string; year: string }
}) {
  try {
    const { makeId, year } = await params
    const models: CarModel[] = await fetchCarModels(makeId, year)
    if (!models || models.length === 0) {
      return {
        title: `No models found for ${makeId} (${year}) - Car Dealer App`,
        description: `No vehicle models were found for the selected make (${makeId}) and year (${year}).`,
      }
    }
    if (models.length === 1) {
      const model = models[0]
      return {
        title: `${model.Model_Name} (${model.Model_Name}) - Car Dealer App`,
        description: `Check out the ${model.Make_Name} model ${model.Model_Name} made in ${year}.`,
      }
    }
    const modelNames = models.map(model => model.Model_Name).join(', ')
    return {
      title: `${models[0]?.Make_Name} (${year}) Models: ${modelNames} - Car Dealer App`,
      description: `Discover the following models for ${makeId} (${year}): ${modelNames}.`,
    }
  } catch (error) {
    new Error('Failed to fetch vehicle models')
  }
}
export default async function ResultPage({
  params,
}: {
  params: { makeId: string; year: string }
}) {
  const { makeId, year } = await params
  return (
    <Suspense fallback={<ModelListSkeleton />} key={`${makeId}-${year}`}>
      <ModelsList makeId={makeId} year={year} />
    </Suspense>
  )
}
