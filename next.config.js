/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Important for GitHub Pages
  },
  basePath: "/ander507.github.io", // Use your repo name
};

module.exports = nextConfig;
