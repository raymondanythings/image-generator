/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/artistic",
        destination: "https://www.naver.com",
      },
    ];
  },
};

module.exports = nextConfig;
