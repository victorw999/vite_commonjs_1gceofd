//vite.config.js
import { defineConfig } from 'vite';
// import commonjs from '@rollup/plugin-commonjs';
import commonjs from 'vite-plugin-commonjs'
// import vitePluginRequire from "vite-plugin-require";

export default defineConfig({
  plugins: [
    // vitePluginRequire()
    commonjs()
  ],
  build: {
    sourcemap: true, // Enables source maps
  },
});