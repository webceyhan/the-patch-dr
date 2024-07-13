import daisyui from 'daisyui';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { light } from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...fontFamily.sans],
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    ...light,
                    primary: '#ea5e56',
                },
            },
        ],
        darkTheme: 'light',
        logs: false,
    },
};
