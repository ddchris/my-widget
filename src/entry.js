import { defineCustomElement } from 'vue'
import MyWidget from './components/MyWidget.ce.vue'

// 把 SFC 轉成 custom element constructor
const MyWidgetElement = defineCustomElement(MyWidget)

// 註冊 custom element（tag name 必須含有 -）
if (!customElements.get('my-widget')) {
  customElements.define('my-widget', MyWidgetElement)
}

// 可選：也 export 出來，方便用 import 動態取得（或給使用者用 JS import）
export default MyWidgetElement
