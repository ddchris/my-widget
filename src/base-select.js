// src/base-select.js
const { defineCustomElement } = window.Vue
import BaseSelect from './components/BaseSelect.vue'

const BaseSelectElement = defineCustomElement({ ...BaseSelect, shadow: true })

if (!customElements.get('base-select')) {
  customElements.define('base-select', BaseSelectElement)
}

export default BaseSelectElement
