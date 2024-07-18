/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV,
    apiBaseUrl: process.env.API_BASE_URL,
    isRelease: process.env.RELEASE,
    apiKey: process.env.API_KEY
  },
};

export default nextConfig;
