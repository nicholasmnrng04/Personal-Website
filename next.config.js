/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: process.env.NODE_ENV === 'development'
              ? "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: data: blob:;"
              : "script-src 'self' https: http: data: blob:;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
