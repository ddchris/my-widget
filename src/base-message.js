import { defineCustomElement } from 'vue'
import BaseMessage from './components/BaseMessage.vue'

const BaseMessageElement = defineCustomElement({ ...BaseMessage, shadow: true })

if (!customElements.get('base-message')) {
  customElements.define('base-message', BaseMessageElement)
}

export default BaseMessageElement
