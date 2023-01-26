import styles from './Header.module.css'
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <p>🎈</p>
        <p>WeatherExpert</p>
      </div>
      <div>🌎</div>
    </header>
  )
}
