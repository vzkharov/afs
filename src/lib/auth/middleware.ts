import 'server-only';

import ky from 'ky';
import { type NextRequest, NextResponse } from 'next/server';

import { env } from '~/env/server';

import { TOKEN_COOKIE_NAME } from './constants';

type CreateAuthMiddlewareOptions = {};

const createAuthMiddleware = () => async (_request: NextRequest, response: NextResponse) => {
  const token = await _fetchAuthToken();

  // Set the token cookie
  response.cookies.set(TOKEN_COOKIE_NAME, token ?? '');

  return response;
};

/**
 * @internal
 */
const _fetchAuthToken = async (): Promise<string | null> => {
  try {
    const response = await ky.get(env.AUTH_API_URL, {
      searchParams: { user: env.AUTH_API_USERNAME },
    });

    const bearerToken = response.headers.get('Authorization');

    const [bearer, token] = bearerToken?.split(' ') ?? [];

    if (bearer !== 'Bearer' || !token) {
      throw new Error('No bearer token found');
    }

    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { createAuthMiddleware };
export type { CreateAuthMiddlewareOptions };
