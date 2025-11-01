// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.js'), // 指向 entry.js
      formats: ['iife'],       // IIFE 格式讓瀏覽器直接讀 window.Vue
      name: 'BaseButton',
      fileName: () => 'base-button.js',
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@element-plus/icons-vue'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@element-plus/icons-vue': 'ElementPlusIconsVue',
        },
      },
    },
  },
})
