import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/entry.js'), // 下面會建立
      formats: ['es'],
      fileName: () => 'my-widget.es.js'
    },
    rollupOptions: {
      external: [],
      output: {
        inlineDynamicImports: true, // 確保單檔輸出
      },
    },
  },
  define: {
    // ✅ 把 process.env.NODE_ENV 直接替換成 'production'
    'process.env.NODE_ENV': JSON.stringify('production'),
  }, 
})