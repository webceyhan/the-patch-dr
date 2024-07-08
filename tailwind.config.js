import daisyui from 'daisyui';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...fontFamily.sans],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['light'],
        darkTheme: 'dark',
        logs: false,
    },
};
