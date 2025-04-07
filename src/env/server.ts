import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

const env = createEnv({
  server: {
    /**
     * Authentication API
     */
    AUTH_API_URL: z.string().url(),
    AUTH_API_USERNAME: z.string(),

    /**
     * Content Security Policy
     */
    CSP_ALLOWED_DOMAINS: z.array(z.string()).default([]).catch([]),
  },

  experimental__runtimeEnv: process.env,
});

export { env };
