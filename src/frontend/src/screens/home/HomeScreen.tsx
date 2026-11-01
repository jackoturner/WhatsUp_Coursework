import { useState } from 'react';
import { fetchGreeting } from '../../api/greetings';
import styles from './HomeScreen.module.css';

export default function HomeScreen() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGreeting() {
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      setMessage(await fetchGreeting());
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <p className={styles.eyebrow}>WhatsUpTeam</p>
        <h1 className={styles.title}>A simple hello.</h1>
        <p>Fetch a greeting from the database to check the connection.</p>
        <button
          className={styles.button}
          type="button"
          onClick={handleGreeting}
          disabled={loading}
        >
          {loading ? 'Fetching…' : 'Fetch hello'}
        </button>
        <div className={styles.result} role="status" aria-live="polite" aria-busy={loading}>
          {message !== null && <p className={styles.greeting}>{message}</p>}
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </main>
    </div>
  );
}
