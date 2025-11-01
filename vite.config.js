import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default defineConfig({
  plugins: [vue({ customElement: true })], // 打包成 Web Component
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.js'),
      formats: ['iife'],
      name: 'BaseButton', // 全域變數名稱
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
