import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { blush: '#D7B1B7', rose: '#EAC5CC', ink: '#292827', muted: '#6F6F6F', paper: '#FAF8F6' } } }, plugins: [] };
export default config;
