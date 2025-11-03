// base-pagination.js
import { defineCustomElement } from 'vue'
import BasePagination from './components/BasePagination.vue'

const BasePaginationElement = defineCustomElement({ ...BasePagination, shadow: true })

if (!customElements.get('base-pagination')) {
  customElements.define('base-pagination', BasePaginationElement)
}

export default BasePaginationElement
