import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import {
    defineConfig
} from 'vite';

export default defineConfig({
    build: {
        outDir: 'build'
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
        }),
        react(),
        tailwindcss()
    ]
});