export function Forecast({ forecastData, frecuency }) {
  return (
    <section className='py-4'>
      <div className='px-4'>
        <h2 className='p-3 capitalize text-xl font-semibold bg-gray-300 rounded-t'>
          {frecuency} forecast
        </h2>
        <div className='px-3 pt-3 pb-5 grid grid-flow-col auto-cols-max gap-2 overflow-x-scroll bg-gray-200 rounded-b'>
          {forecastData?.map((d, index) => {
            return (
              <article
                key={index}
                className='flex flex-col gap-3 text-center py-3 px-2 border-gray-400 border-r last:border-r-0'
              >
                <div className='flex flex-col gap-2'>
                  <p>{d.date}</p>
                  <p>{d.temp}</p>
                </div>
                <div className='h-20 w-20 m-auto rounded-full bg-slate-500'>
                  <img
                    src={d.icon}
                    alt={d.condition}
                    loading='lazy'
                    className='object-cover'
                  />
                  <span>{d.condition}</span>
                </div>
                {frecuency === 'daily' ? (
                  <div>
                    <span>{d.temp.max}.</span>
                    <span> {d.temp.min}.</span>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
