import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Cache common image types for a long time
        source: '/:path*\.(jpg|jpeg|png|webp|avif|svg|gif)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache static JS/CSS artifacts
        source: '/_next/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
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
