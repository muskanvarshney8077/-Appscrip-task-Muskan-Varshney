/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // Allow images from fakestoreapi.com
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Dashboard",
        permanent: true, // Set this to true if the redirect is permanent
      },
    ];
  },
};

export default nextConfig;
