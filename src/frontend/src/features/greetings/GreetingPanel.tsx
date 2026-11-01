import { useState } from 'react';
import { fetchGreeting } from '../../services/greetingService';
import styles from './GreetingPanel.module.css';

type GreetingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export default function GreetingPanel() {
  const [state, setState] = useState<GreetingState>({ status: 'idle' });
  const isLoading = state.status === 'loading';

  async function loadGreeting() {
    setState({ status: 'loading' });

    try {
      const message = await fetchGreeting();
      setState({ status: 'success', message });
    } catch (error) {
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong.',
      });
    }
  }

  return (
    <>
      <button
        className={styles.button}
        type="button"
        onClick={loadGreeting}
        disabled={isLoading}
      >
        {isLoading ? 'Fetching…' : 'Fetch hello'}
      </button>
      <div className={styles.result} role="status" aria-live="polite" aria-busy={isLoading}>
        {state.status === 'success' && <p className={styles.greeting}>{state.message}</p>}
        {state.status === 'error' && <p className={styles.error}>{state.message}</p>}
      </div>
    </>
  );
}
