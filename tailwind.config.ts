import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-kalam)', 'cursive'],
        body: ['var(--font-patrick-hand)', 'cursive'],
      },
      colors: {
        paper: '#fdfbf7',
        pencil: '#2d2d2d',
        muted: '#e5e0d8',
        sketch: '#ff4d4d',
        ink: '#2d5da1',
        postit: '#fff9c4',
      },
      borderRadius: {
        wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px',
        wobblyMd: '15px 225px 15px 255px / 225px 15px 255px 15px',
        wobblyBtn: '120px 8px 110px 8px / 8px 110px 8px 120px',
      },
      boxShadow: {
        hard: '4px 4px 0px 0px #2d2d2d',
        hardLg: '8px 8px 0px 0px #2d2d2d',
        hardSm: '2px 2px 0px 0px #2d2d2d',
      },
      keyframes: {
        bounce3d: {
          '0%,100%': { transform: 'translateY(0) rotate(12deg)' },
          '50%': { transform: 'translateY(-10px) rotate(12deg)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        bounce3d: 'bounce3d 3s ease-in-out infinite',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
