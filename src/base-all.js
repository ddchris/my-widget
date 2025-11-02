const { defineCustomElement } = window.Vue

import BaseButton from './components/BaseButton.vue'
import BaseInput from './components/BaseInput.vue'
import 'element-plus/theme-chalk/el-button.css'
import 'element-plus/theme-chalk/el-input.css'

// 把 SFC 轉成 custom element constructor
const BaseButtonElement = defineCustomElement({...BaseButton, shadow: true})
const BaseInputElement = defineCustomElement({ ...BaseInput, shadow: true })
// 註冊 custom element（tag name 必須含有 -）
if (!customElements.get('base-button')) {
  customElements.define('base-button', BaseButtonElement)
}
if (!customElements.get('base-input')) {
  customElements.define('base-input', BaseInputElement)
}

// 可選：也 export 出來，方便用 import 動態取得（或給使用者用 JS import）
export default { BaseButtonElement, BaseInputElement }