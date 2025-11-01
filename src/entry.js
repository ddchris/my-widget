// src/entry.js

// 從全域 Vue 取 defineCustomElement
const { defineCustomElement } = window.Vue;

// 從全域 Element Plus 取需要的元件
const { ElButton } = window.ElementPlus;

// 假設 BaseButton.vue 很簡單，我們直接用 defineCustomElement 建立
const BaseButtonElement = defineCustomElement({
  props: ['label'],
  // 如果 BaseButton.vue 有 template，可以改用 render function
  render() {
    // 使用 Element Plus 的 ElButton
    return window.Vue.h(ElButton, {}, { default: () => this.label });
  }
});

// 註冊 custom element
customElements.define('base-button', BaseButtonElement);
