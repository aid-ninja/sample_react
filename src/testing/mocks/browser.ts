import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

type WorkerHandler = Parameters<typeof setupWorker>[0];

export const worker = setupWorker(...(handlers as unknown as WorkerHandler[]));

