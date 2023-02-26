export function Header() {
  return (
    <header className='bg-black text-white h-14 px-4'>
      <div className='flex h-full justify-between 100'>
        <div className='flex self-center gap-2'>
          <p>🎈</p>
          <p className='font-semibold text-lg '>WeatherExpert</p>
        </div>
        <div className='flex self-center'>🌎</div>
      </div>
    </header>
  )
}
