// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: {
        'base-button': path.resolve(__dirname, 'src/base-button.js'),
        'base-input': path.resolve(__dirname, 'src/base-input.js'),
        'all': path.resolve(__dirname, 'src/base-all.js'),
      },
      formats: ['iife'],
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@element-plus/icons-vue'],
      output: {
        entryFileNames: '[name].js',
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@element-plus/icons-vue': 'ElementPlusIconsVue',
        },
      },
    },
  },
})
