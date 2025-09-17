// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://tc.yinyanghouse.com',
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [alpinejs(), sitemap()],
});
