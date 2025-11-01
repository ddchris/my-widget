import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue({ customElement: true })], // 若要打包成 Web Component 建議加這個
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.js'),
      formats: ['es'],
      fileName: () => 'base-button.es.js',
    },
    rollupOptions: {
      // ⛔ 不要打包 vue、element-plus、icons-vue
      external: ['vue', 'element-plus', '@element-plus/icons-vue'],
      output: {
        inlineDynamicImports: true, // 確保單檔輸出
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@element-plus/icons-vue': 'ElementPlusIconsVue',
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
})
