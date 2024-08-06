/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
          "localhost",
          "loremflickr.com",
          "images.unsplash.com",
          "images.pexels.com",
          "pbs.twimg.com"
        ],
      },
};

export default nextConfig;
