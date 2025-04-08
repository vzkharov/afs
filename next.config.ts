import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@t3-oss/env-nextjs', '@t3-oss/env-core'],
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test-task-api.allfuneral.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
