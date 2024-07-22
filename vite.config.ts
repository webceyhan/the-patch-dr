import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vsharp from 'vite-plugin-vsharp';

// https://vitejs.dev/config/
export default defineConfig({
    base: './', // fix for github-pages
    plugins: [vue(), vsharp()],
});
