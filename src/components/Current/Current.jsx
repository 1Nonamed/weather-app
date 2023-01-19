import styles from './Current.module.css';

export function Current({ current, units, changeUnits }) {
  const toggleClass = (u) => (units === u ? styles.active : styles.inactive);

  return (
    <section>
      <article className="px-4 py-3">
        <h2>
          {current.name}, {current.country}
          <span className={styles.currentTime}> {current.dt}</span>
        </h2>
        <div className="flex space-between align-center">
          <div>
            <div className="flex align-center">
              <p className={styles.currentTemp}>{current.temp}</p>
              <p>
                <button onClick={() => changeUnits('metric')}>
                  <span className={toggleClass('metric')}>°C</span>
                </button>
                <span> | </span>
                <button onClick={() => changeUnits('imperial')}>
                  <span className={toggleClass('imperial')}>°F</span>
                </button>
              </p>
            </div>
            <p>Feels like {current.feels_like}</p>
          </div>
          <aside>
            <img src={current.icon} alt={current.description} />
            <p>{current.description}</p>
          </aside>
        </div>
        <div>
          <p>Sunrise {current.sunrise}</p>
          <p>Sunset {current.sunset}</p>
        </div>
      </article>
    </section>
  );
}
