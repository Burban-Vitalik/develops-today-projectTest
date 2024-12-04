import { DropdownProps } from '../interface'

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  onChange,
  options,
  placeholder,
}) => (
  <select
    className='p-3 border rounded-lg w-full bg-white shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300'
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    <option value='' disabled className='text-gray-500'>
      {placeholder}
    </option>
    {options.map(option => (
      <option
        key={option.value}
        value={option.value}
        className='text-gray-700 hover:bg-gray-100'
      >
        {option.label}
      </option>
    ))}
  </select>
)
