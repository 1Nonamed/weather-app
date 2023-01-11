import styles from './Main.module.css';

export const Main = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
