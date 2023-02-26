export function Current({ current, units, changeUnits }) {
  // const toggleClass = (u) => (units === u ? styles.active : styles.inactive)

  return (
    <section className='pt-5 pb-4 z-20'>
      <article className='px-4'>
        <div className='p-3 bg-dark-blue rounded'>
          <h2 className='text-xl font-semibold mb-3'>
            {current?.name}, {current?.country}
            <span className='text-sm italic font-normal'> {current?.dt}</span>
          </h2>
          <div className='flex justify-between'>
            <div>
              <div className='flex gap-2'>
                <div>
                  <p className='text-4xl'>{current?.temp}</p>
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
            <aside className='bg-gray-500 rounded-full'>
              <img src={current?.icon} alt={current?.description} />
              <p>{current?.description}</p>
            </aside>
          </div>
          <div>
            <p>Sunrise {current?.sunrise}</p>
            <p>Sunset {current?.sunset}</p>
          </div>
        </div>
      </article>
    </section>
  )
}
