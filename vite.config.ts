import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Content-Type', 'application/javascript');
          next();
        });
      }
    },
    // Simple HTML transformer to ensure script paths work in both dev and prod
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<script type="module" src="\.\/src\/main\.jsx"><\/script>/,
          '<script type="module" src="./src/main.jsx"></script>'
        );
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    // Copy index.html verbatim
    copyPublicDir: true
  },
  optimizeDeps: {
    include: ['p5'],
    force: true
  }
})
