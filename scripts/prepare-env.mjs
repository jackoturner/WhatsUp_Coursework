import { constants, copyFileSync } from 'node:fs';

const example = new URL('../.env.example', import.meta.url);
const destination = new URL('../.env', import.meta.url);

try {
  copyFileSync(example, destination, constants.COPYFILE_EXCL);
  console.log('Created .env from .env.example for local development.');
} catch (error) {
  if (error.code !== 'EEXIST') {
    throw error;
  }
}
