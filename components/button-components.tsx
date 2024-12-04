import Link from 'next/link'
import { FaCar } from 'react-icons/fa'

interface IProps {
  selectedMake: string
  selectedYear: string
  title: string
}

export const CustomButton = ({ selectedMake, title, selectedYear }: IProps) => {
  const isDisabled = !(selectedMake && selectedYear)

  return (
    <Link
      href={`/result/${selectedMake}/${selectedYear}`}
      className={`p-3 flex items-center justify-center gap-2 text-white rounded-lg shadow-lg transition-transform duration-300 mt-4 w-full max-w-md ${
        isDisabled
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-500 to-green-600 hover:scale-105'
      }`}
    >
      {!isDisabled && <FaCar size={18} />}
      {title}
    </Link>
  )
}
