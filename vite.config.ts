import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { proxy } from '@domoinc/create-proxy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), proxy('public/manifest.json').vite]
})
