// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Make sure this is correct
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', // Include all paths that use Tailwind classes
  ],
  theme: {
    extend: {
      // Add custom colors or other theme settings if necessary
    },
  },
  plugins: [],
};

export default config;