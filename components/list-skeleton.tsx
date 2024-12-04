export function ModelListSkeleton() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='animate-pulse'>
        <div className='h-8 bg-gray-300 w-64 mb-6 rounded'></div>
        <div className='space-y-3 w-full max-w-md'>
          {[1, 2, 3, 4].map(item => (
            <div key={item} className='h-12 bg-gray-200 rounded'></div>
          ))}
        </div>
      </div>
    </div>
  )
}
