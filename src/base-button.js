const { defineCustomElement } = window.Vue

import BaseButton from './components/BaseButton.vue'
import 'element-plus/theme-chalk/el-button.css'

// 把 SFC 轉成 custom element constructor
const BaseButtonElement = defineCustomElement({...BaseButton, shadow: true})
// 註冊 custom element（tag name 必須含有 -）
if (!customElements.get('base-button')) {
  customElements.define('base-button', BaseButtonElement)
}

// 可選：也 export 出來，方便用 import 動態取得（或給使用者用 JS import）
export default BaseButtonElement
