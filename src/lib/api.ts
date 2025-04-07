import ky from 'ky';

import { env } from '~/env/client';
import { getAuthTokenFromCookie } from '~/lib/auth/request-hook';

const createApi = (prefixUrl: string) =>
  ky.create({
    prefixUrl: `${env.NEXT_PUBLIC_API_URL}${prefixUrl}`,
    hooks: {
      beforeRequest: [
        async (request) => {
          const token = await getAuthTokenFromCookie();

          if (token) {
            request.headers.set('Authorization', `Bearer ${token}`);
          }

          return request;
        },
      ],
    },
  });

export { createApi };
