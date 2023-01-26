export function Forecast({ forecastData, frecuency, isDaily }) {
  return (
    <section>
      <h2>{frecuency} forecast</h2>
      <div className='flex overflow-x'>
        {forecastData.map((d) => {
          const temp = frecuency === 'hourly' ? d.temp : d.temp.day
          return (
            <article key={d.dt} className='text-center'>
              <div>
                <p>{d.date}</p>
                <p>{temp}</p>
              </div>
              <div className='text-center'>
                <img src={d.icon} alt={d.description} />
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
    </section>
  )
}
