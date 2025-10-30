import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/#why-us',
        permanent: true,
      },
      {
        source: '/service-details.html',
        destination: '/services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
