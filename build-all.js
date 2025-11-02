// 自訂 build 腳本
// 遍歷多個元件 entry，自動 build
// 每個元件都可單獨設定 name、fileName、globalName
// 控制輸出到同一個 dist
// 用多個 vite config 也可以，但需要每次打包多次
import { build } from 'vite'
import path from 'path'

// package.json "type": "module" → Node 會把 .js 當成 ES Module
// ES Module 沒有 __dirname（它是 CommonJS 專屬）
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const components = [
  {
    name: 'base-button',
    entry: path.resolve(__dirname, 'src/base-button.js'),
    globalName: 'BaseButton'
  },
  {
    name: 'base-input',
    entry: path.resolve(__dirname, 'src/base-input.js'),
    globalName: 'BaseInput'
  },
  {
    name: 'all',
    entry: path.resolve(__dirname, 'src/base-all.js'),
    globalName: 'MyComponents'
  }
]

async function buildComponent({ name, entry, globalName }) {
  console.log(`\nBuilding ${name}...`)
  await build({
    plugins: [],
    build: {
      lib: {
        entry,
        name: globalName,
        formats: ['iife'],
        fileName: () => `${name}.js`
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
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: false,
    },
  })
  console.log(`${name} build done!`)
}

async function buildAll() {
  for (const comp of components) {
    await buildComponent(comp)
  }
}

buildAll()
