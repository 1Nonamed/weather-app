export function Current({ current, units, changeUnits }) {
  // const toggleClass = (u) => (units === u ? styles.active : styles.inactive)

  return (
    <section className='h-[calc(100vh-60px)] pt-5 pb-4 z-20 grid place-items-center text-center bg-red-200'>
      <article className='grid gap-5 justify-center'>
        <h2 className='text-3xl font-semibold mb-3'>
          {current?.name}, {current?.country}
          <span className='text-sm italic font-normal'> {current?.dt}</span>
        </h2>
        <div>
          <div className=''>
            <div>
              <p className='text-6xl'>{current?.temp}</p>
              <p className='mt-3'>Feels like {current?.feelsLike}</p>
            </div>

            <p>
              <button
                onClick={() => changeUnits('metric')}
                className='cursor-pointer'
              >
                <span>°C</span>
              </button>
              <span> | </span>
              <button
                onClick={() => changeUnits('imperial')}
                className='cursor-pointer'
              >
                <span>°F</span>
              </button>
            </p>
          </div>
        </div>
        <div>
          <div className='inline-block bg-zinc-900 rounded-full'>
            <img
              src={current?.icon}
              alt={current?.condition}
              className='m-auto'
            />
          </div>
          <p>{current?.condition}</p>
        </div>
        <div>
          <p>Sunrise {current?.sunrise}</p>
          <p>Sunset {current?.sunset}</p>
        </div>
      </article>
    </section>
  )
}
