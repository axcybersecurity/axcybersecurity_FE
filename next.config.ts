import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://accs.pusan.ac.kr/api/:path*',
      },
    ];
  },
}
export default nextConfig;
