/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/hub/:path*',
        destination: 'https://project-hub-seven.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;

  
  