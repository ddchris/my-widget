import { defineCustomElement } from 'vue'
import BaseButton from './components/BaseButton.vue'

const BaseButtonElement = defineCustomElement(BaseButton)
customElements.define('base-button', BaseButtonElement)
