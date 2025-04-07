import { getCookie } from '~/utils/cookie';

import { TOKEN_COOKIE_NAME } from './constants';

const getAuthTokenFromCookie = async () => {
  // Means we are on the server
  if (typeof window === 'undefined') {
    const cookieStore = await import('next/headers').then((module) => module.cookies());

    return cookieStore.get(TOKEN_COOKIE_NAME)?.value ?? null;
  }

  return getCookie(window.document.cookie, TOKEN_COOKIE_NAME);
};

export { getAuthTokenFromCookie };
