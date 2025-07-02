import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'MyMicrofrontend',
      fileName: (format) => `my-microfrontend.${format}.js`,
      formats: ['system']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'single-spa', 'single-spa-react'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'single-spa': 'singleSpa',
          'single-spa-react': 'singleSpaReact'
        }
      }
    }
  },
  define: {
    'process.env': {}
  }
})
