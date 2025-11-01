import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue({ customElement: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/BaseButton.vue'),
      formats: ['iife'],        // ❌ 改成 IIFE，瀏覽器可直接用 window.Vue
      name: 'BaseButton',
      fileName: () => 'base-button.js',
    },
    rollupOptions: {
      external: ['vue', 'element-plus', '@element-plus/icons-vue'],
      output: {
        globals: {
          vue: 'Vue',                   // 從 window.Vue 取得
          'element-plus': 'ElementPlus',// 從 window.ElementPlus 取得
          '@element-plus/icons-vue': 'ElementPlusIconsVue', // 從 window.ElementPlusIconsVue
        },
      },
    },
  },
})
