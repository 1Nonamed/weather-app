export function Forecast({ forecastData, frecuency, isDaily }) {
  return (
    <section className='py-4'>
      <div className='px-4'>
        <h2 className='p-3 capitalize text-xl font-semibold bg-dark-blue border-b'>
          {frecuency} forecast
        </h2>
      </div>
      <div className='px-4'>
        <div className='p-3 grid grid-flow-col auto-cols-max overflow-x-scroll  bg-dark-blue'>
          {forecastData?.map((d, index) => {
            const temp = frecuency === isDaily ? d.temp.day : d.temp
            return (
              <article
                key={index}
                className='flex flex-col gap-3 text-center py-3 px-3 border-r last:border-r-0'
              >
                <div>
                  <p>{d.date}</p>
                  <p>{temp}</p>
                </div>
                <div className='h-20 w-20 m-auto rounded-full bg-slate-500'>
                  <img
                    src={d.icon}
                    alt={d.description}
                    className='object-cover'
                  />
                  <span>{d.description}</span>
                </div>
                {isDaily && (
                  <div>
                    <span>{d.temp.max}.</span>
                    <span> {d.temp.min}.</span>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
