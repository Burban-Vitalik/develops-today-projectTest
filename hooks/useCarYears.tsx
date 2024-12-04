export const useCarYears = (initialYear: number = 2015) => {
  const currentYear = new Date().getFullYear()
  const yearRange = Array.from(
    { length: currentYear - initialYear + 1 },
    (_, i) => initialYear + i,
  )

  return yearRange
}
