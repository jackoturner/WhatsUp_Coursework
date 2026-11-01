import GreetingPanel from '../../../features/greetings/GreetingPanel';
import styles from './HomeScreen.module.css';

export default function HomeScreen() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <p className={styles.eyebrow}>WhatsUpTeam</p>
        <h1 className={styles.title}>A simple hello.</h1>
        <p>Fetch a greeting from the database to check the connection.</p>
        <GreetingPanel />
      </main>
    </div>
  );
}
