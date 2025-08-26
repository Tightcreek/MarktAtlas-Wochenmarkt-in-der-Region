import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
        dead_code: true,
        drop_unused: true,
      },
      mangle: {
        toplevel: true,
        safari10: true,
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ecma: 2020
      }
    },
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core vendor libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor-react';
          }
          
          // Router chunk
          if (id.includes('react-router-dom')) {
            return 'vendor-router';
          }
          
          // UI library chunks
          if (id.includes('@radix-ui') || id.includes('lucide-react')) {
            return 'vendor-ui';
          }
          
          // Analytics and tracking
          if (id.includes('posthog')) {
            return 'analytics';
          }
          
          // Data chunks - split heavy data files
          if (id.includes('/data/')) {
            return 'data';
          }
          
          // Page chunks - each page gets its own chunk for better caching
          if (id.includes('/pages/Index')) return 'page-home';
          if (id.includes('/pages/Markets')) return 'page-markets';
          if (id.includes('/pages/Blog')) return 'page-blog';
          if (id.includes('/pages/ChristmasMarkets')) return 'page-christmas';
          if (id.includes('/pages/MarketDetail') || id.includes('/pages/ChristmasMarketDetail')) return 'page-details';
          
          // Other vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor-libs';
          }
        },
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType || '')) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    chunkSizeWarningLimit: 1000,
    
    // Enable tree shaking
    treeShaking: true,
    
    // Optimize dependencies
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['@google/maps']
    }
  }
}));
