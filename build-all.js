import { build } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const components = [
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
  await build({
    plugins: [vue({ customElement: true })],
    build: {
      lib: {
        entry,
        name: globalName,
        formats: ['iife'],
        fileName: () => `${name}.js`,
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
