const { defineCustomElement } = window.Vue

import BaseInput from './components/BaseInput.vue'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-icon.css'

// 把 SFC 轉成 custom element constructor
const BaseInputElement = defineCustomElement({ ...BaseInput, shadow: true })

// 註冊 custom element（tag name 必須含有 -）
if (!customElements.get('base-input')) {
  customElements.define('base-input', BaseInputElement)
}

// 可選 export
export default BaseInputElement
