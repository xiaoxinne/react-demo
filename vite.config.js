import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import createExternal from 'vite-plugin-external';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    react(),
    viteCompression(),
    createExternal({
      externals: {
        interop: 'auto',
        externals: {
          react: '$linkdesign.React',
          'react-dom': '$linkdesign.ReactDOM',
          'prop-types': '$linkdesign.PropTypes',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // 如果是node_modules的代码。打包成vendor.js。和业务代码进行区分开。
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // 进行缓存，避免vendor.js一直重新请求
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
