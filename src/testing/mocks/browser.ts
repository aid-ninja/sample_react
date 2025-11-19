import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

// @ts-expect-error its ok
export const worker = setupWorker(...handlers);
