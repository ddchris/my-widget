// base-date-picker.js
import { defineCustomElement } from 'vue'
import BaseDatePicker from './components/BaseDatePicker.vue'

const BaseDatePickerElement = defineCustomElement({ ...BaseDatePicker, shadow: true })

if (!customElements.get('base-date-picker')) {
  customElements.define('base-date-picker', BaseDatePickerElement)
}

export default BaseDatePickerElement
