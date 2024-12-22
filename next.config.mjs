/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'encrypted-tbn0.gstatic.com',
        // Add any other external image domains you're using
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**', // Use with caution, allows all external image domains
        }
      ]
    }
  };
  
  export default nextConfig;