// base-tabs.js
import { defineCustomElement } from 'vue'
import BaseTabs from './components/BaseTabs.vue'

const BaseTabsElement = defineCustomElement({ ...BaseTabs, shadow: true })

if (!customElements.get('base-tabs')) {
  customElements.define('base-tabs', BaseTabsElement)
}

export default BaseTabsElement
