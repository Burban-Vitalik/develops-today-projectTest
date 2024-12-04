'use client'

import React, { useState } from 'react'
import { useCarBrands, useCarYears } from '@/hooks'
import { CustomButton, Dropdown } from '@/components'

type Option = { value: string; label: string }

type SelectedCar = {
  selectedYear: string
  selectedMake: string
}

const LoadingScreen: React.FC = () => (
  <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
    <p>Loading vehicle makes...</p>
  </div>
)

const ErrorScreen: React.FC<{ message: string }> = ({ message }) => (
  <div className='min-h-screen bg-gray-100 flex items-center justify-center text-red-500'>
    <p>Error: {message}</p>
  </div>
)

const DropdownSection: React.FC<{
  options: { makes: Option[]; years: Option[] }
  stateHandlers: {
    selectedMake: string
    setSelectedMake: (value: string) => void
    selectedYear: string
    setSelectedYear: (value: string) => void
  }
}> = ({ options, stateHandlers }) => {
  const { makes, years } = options
  const { selectedMake, setSelectedMake, selectedYear, setSelectedYear } =
    stateHandlers

  return (
    <div className='flex flex-col gap-4 w-full max-w-md'>
      <Dropdown
        value={selectedMake}
        onChange={setSelectedMake}
        options={makes}
        placeholder='Select a Make'
      />
      <Dropdown
        value={selectedYear}
        onChange={setSelectedYear}
        options={years}
        placeholder='Select a Year'
      />
    </div>
  )
}

const HomePage: React.FC = () => {
  const { brands, isLoading, error } = useCarBrands()
  const years = useCarYears()

  const [selectedMake, setSelectedMake] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<string>('')

  if (isLoading) return <LoadingScreen />
  if (error) return <ErrorScreen message={error.message} />

  const makeOptions: Option[] = brands.map(brand => ({
    value: brand.MakeId,
    label: brand.MakeName,
  }))

  const yearOptions: Option[] = years.map(year => ({
    value: year.toString(),
    label: year.toString(),
  }))

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <h1 className='text-2xl font-bold mb-6'>Car Dealer App</h1>
      <DropdownSection
        options={{ makes: makeOptions, years: yearOptions }}
        stateHandlers={{
          selectedMake,
          setSelectedMake,
          selectedYear,
          setSelectedYear,
        }}
      />
      <CustomButton
        selectedMake={selectedMake}
        selectedYear={selectedYear}
        title='Next'
      />
    </div>
  )
}

export default HomePage
