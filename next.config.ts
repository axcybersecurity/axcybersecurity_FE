const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://accs.pusan.ac.kr/api/:path*",
      },
    ];
  },
};
module.exports = nextConfig;
 
 