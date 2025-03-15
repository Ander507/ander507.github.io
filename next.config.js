/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  images: {
    unoptimized: true, // Required for GitHub Pages (disables Next.js image optimization)
  },
  basePath: "/ander507.github.io", // Use your repository name
  assetPrefix: "/ander507.github.io", // Fixes static asset paths
};

module.exports = nextConfig;
