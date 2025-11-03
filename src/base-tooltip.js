import { defineCustomElement } from 'vue'
import BaseTooltip from './components/BaseTooltip.vue'

const BaseTooltipElement = defineCustomElement({ ...BaseTooltip, shadow: true })

if (!customElements.get('base-tooltip')) {
  customElements.define('base-tooltip', BaseTooltipElement)
}

export default BaseTooltipElement
