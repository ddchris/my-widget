import { build } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite' // 🚨 修正：導入 Vue Macros
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const components = [
  // ... 保持不變
  { name: 'base-button', entry: path.resolve(__dirname, 'src/base-button.js'), globalName: 'BaseButton' },
  { name: 'base-input', entry: path.resolve(__dirname, 'src/base-input.js'), globalName: 'BaseInput' },
  { name: 'base-all', entry: path.resolve(__dirname, 'src/base-all.js'), globalName: 'MyComponents' },
  { name: 'base-pagination', entry: path.resolve(__dirname, 'src/base-pagination.js'), globalName: 'BasePagination' },
  { name: 'base-breadcrumb', entry: path.resolve(__dirname, 'src/base-breadcrumb.js'), globalName: 'BaseBreadcrumb' },
  { name: 'base-tabs', entry: path.resolve(__dirname, 'src/base-tabs.js'), globalName: 'BaseTabs' },
  { name: 'base-date-time-picker', entry: path.resolve(__dirname, 'src/base-date-time-picker.js'), globalName: 'BaseDateTimePicker' },
  { name: 'base-tooltip', entry: path.resolve(__dirname, 'src/base-tooltip.js'), globalName: 'BaseTooltip' },
  { name: 'base-message', entry: path.resolve(__dirname, 'src/base-message.js'), globalName: 'BaseMessage' },
  { name: 'base-message-box', entry: path.resolve(__dirname, 'src/base-message-box.js'), globalName: 'BaseMessageBox' },
]

async function buildComponent({ name, entry, globalName }) {
  console.log(`\nBuilding ${name}...`)
  
  // 🚨 修正：確保插件配置與您的 Vite 配置保持一致，以正確解析 SFC
  const plugins = [
    // 必須使用 VueMacros 來處理 <script setup lang="ts"> 和 defineModel
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: vue({
          customElement: true, // Web Component 模式
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
      },
    }),
  ];
  
  await build({
    plugins, // 應用修正後的插件
    build: {
      lib: {
        entry,
        name: globalName,
        formats: ['iife'],
        fileName: () => `${name}.js`,
      },
      rollupOptions: {
        // 修正：加入所有外部依賴
        external: [
          'vue',
          'element-plus',
          '@element-plus/icons-vue',
        ],
        output: {
          // iife 格式下的全域變數名稱映射
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