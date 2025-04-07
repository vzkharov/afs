import { createAuthMiddleware } from '~/lib/auth/middleware';

import type { MiddlewareFactory } from './types';

const authMiddleware = createAuthMiddleware();

const withAuthMiddleware: MiddlewareFactory = (middleware) => async (request, event, response) => {
  const nextResponse = await authMiddleware(request, response);

  return middleware(request, event, nextResponse);
};

export { withAuthMiddleware };
