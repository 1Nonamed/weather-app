import styles from './Current.module.css';

export function Current({ current }) {
  console.log(current);
  return (
    <section>
      <article className="px-4 py-3">
        <h2>
          {current?.name}, {current?.country}
          <span className={styles.currentTime}> Jan 17, 12:46am</span>
        </h2>
        <div className="flex space-between align-center text-center">
          <div>
            <p className={styles.currentTemp}>{current?.temp}°C</p>
            <p>Feels like {current?.feels_like}°C</p>
          </div>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${current?.icon}@2x.png`}
              alt={current?.description}
            />
            <p>{current?.description}</p>
          </div>
        </div>
        <div>
          <p>Sunrise @ 12:46am</p>
          <p>Sunset @ 12:46am</p>
        </div>
      </article>
    </section>
  );
}
