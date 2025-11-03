import { defineCustomElement } from 'vue'
import BaseMessageBox from './components/BaseMessageBox.vue'

const BaseMessageBoxElement = defineCustomElement({ ...BaseMessageBox, shadow: true })

if (!customElements.get('base-message-box')) {
  customElements.define('base-message-box', BaseMessageBoxElement)
}

export default BaseMessageBoxElement
