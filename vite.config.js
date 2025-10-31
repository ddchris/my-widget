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
      // 不特別 externalize，讓 Vue 一併被打包到輸出檔（簡單做法）
      // 如果你想外部化 Vue（不把 Vue 包進去），可把 'vue' 加到 external 並再改消費方用法（見下）
      external: ['vue']
    }
  }
})