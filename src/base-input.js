const { defineCustomElement } = window.Vue

import BaseInput from './components/BaseInput.vue'

// 把 SFC 轉成 custom element constructor
const BaseInputElement = defineCustomElement({ ...BaseInput, shadow: true })

// 註冊 custom element（tag name 必須含有 -）
if (!customElements.get('base-input')) {
  customElements.define('base-input', BaseInputElement)
}

// 可選 export
export default BaseInputElement
