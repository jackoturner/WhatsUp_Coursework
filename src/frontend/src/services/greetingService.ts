export async function fetchGreeting(): Promise<string> {
  const response = await fetch('/api/greetings/hello', {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error('Could not fetch the greeting. Please try again.');
  }

  const data: unknown = await response.json();
  if (
    typeof data !== 'object' ||
    data === null ||
    !('message' in data) ||
    typeof data.message !== 'string'
  ) {
    throw new Error('The server returned an unexpected response.');
  }

  return data.message;
}
