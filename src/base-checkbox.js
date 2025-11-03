// src/base-checkbox.js
const { defineCustomElement } = window.Vue
import BaseCheckbox from './components/BaseCheckbox.vue'

const BaseCheckboxElement = defineCustomElement({ ...BaseCheckbox, shadow: true })

if (!customElements.get('base-checkbox')) {
  customElements.define('base-checkbox', BaseCheckboxElement)
}

export default BaseCheckboxElement
