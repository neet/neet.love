/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/links",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
