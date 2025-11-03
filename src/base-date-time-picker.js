// base-date-time-picker.js
import { defineCustomElement } from 'vue'
import BaseDateTimePicker from './components/BaseDateTimePicker.vue'

const BaseDateTimePickerElement = defineCustomElement({ ...BaseDateTimePicker, shadow: true })

if (!customElements.get('base-date-time-picker')) {
  customElements.define('base-date-time-picker', BaseDateTimePickerElement)
}

export default BaseDateTimePickerElement
