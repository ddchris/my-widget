// base-breadcrumb.js
import { defineCustomElement } from 'vue'
import BaseBreadcrumb from './components/BaseBreadcrumb.vue'

const BaseBreadcrumbElement = defineCustomElement({ ...BaseBreadcrumb, shadow: true })

if (!customElements.get('base-breadcrumb')) {
  customElements.define('base-breadcrumb', BaseBreadcrumbElement)
}

export default BaseBreadcrumbElement
