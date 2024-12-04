import { fetchCarModels } from '@/service'
import { use } from 'react'

export function ModelsList({ makeId, year }: { makeId: string; year: string }) {
  if (!makeId || !year) {
    return <p className='text-center text-red-500'>Missing make or year</p>
  }
  const models = use(fetchCarModels(makeId as string, year as string))
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center p-4'>
      <h1 className='text-2xl font-bold mb-6'>
        Models for {makeId} ({year})
      </h1>
      {models.length ? (
        <ul className='w-full max-w-md'>
          {models.map(model => (
            <li
              key={model.Model_ID}
              className='p-3 border rounded mb-2 bg-white shadow hover:bg-gray-50 transition-colors'
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-600'>
          No models found for the selected make and year.
        </p>
      )}
    </div>
  )
}
